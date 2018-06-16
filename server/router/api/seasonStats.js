var https = require('https')
var serverPrivate = require('../../serverprivate')

module.exports = function (app) {
  app.get('/seasonStats', (req, res) => {
    const { country, season, nickname } = req.query

    let options = {
      host: 'api.playbattlegrounds.com',
      path: `/shards/${country}/players?filter[playerNames]=${nickname}`,
      method: 'GET',
      headers: {
        Accept: 'application/vnd.api+json',
        Authorization: serverPrivate.authKey
      }
    }
    let result = []
    let resultForId
    let id
    https
      .request(options, function (response) {
        response
          .on('data', function (data) {
            result.push(data)
          })
          .on('end', function () {
            let data = Buffer.concat(result).toString()
            resultForId = JSON.parse(data)
            id = resultForId.data.map(({ id }) => id)
            console.log('id', id[0])

            options.path = `/shards/${country}/players/${
              id[0]
            }/seasons/${season}`

            console.log('options.path', options.path)

            let resultStat = []
            let resultForResponse

            https
              .request(options, function (response) {
                response
                  .on('data', function (data) {
                    resultStat.push(data)
                  })
                  .on('end', function () {
                    let data = Buffer.concat(resultStat).toString()
                    resultForResponse = JSON.parse(data)
                    res.json(resultForResponse.data.attributes.gameModeStats)
                  })
              })
              .end()
          })
      })
      .end()
  })
}
