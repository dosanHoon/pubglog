var https = require('https')
var serverPrivate = require('../../serverprivate')

module.exports = function (app) {
  app.get('/seasonStats', (req, res) => {
    const { country, season, pubgId } = req.query

    let options = {
      host: 'api.playbattlegrounds.com',
      path: `/shards/${country}/players/${pubgId}/seasons/${season}`,
      method: 'GET',
      headers: {
        Accept: 'application/vnd.api+json',
        Authorization: serverPrivate.authKey
      }
    }
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
}
