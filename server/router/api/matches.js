var https = require('https')
var async = require('async')
var serverPrivate = require('../../serverprivate')

module.exports = function (app) {
  app.get('/getMatches', (req, res) => {
    const { country, pubgId } = req.query

    let options = {
      host: 'api.playbattlegrounds.com',
      path: `/shards/${country}/players/${pubgId}`,
      method: 'GET',
      headers: {
        Accept: 'application/vnd.api+json',
        Authorization: serverPrivate.authKey
      }
    }

    let result = []
    let resultMatch
    let MatchesId

    https
      .request(options, function (response) {
        response
          .on('data', function (data) {
            result.push(data)
          })
          .on('end', function () {
            let data = Buffer.concat(result).toString()
            resultMatch = JSON.parse(data)
            MatchesId = resultMatch.data.relationships.matches.data

            // MatchesId.forEach(({ id }, index) => {
            //   options.path = `/shards/${country}/matches/${id}`
            //   sendRequest(options, index)
            // })

            async.times(5, sendRequestWrapper, () => {
              console.log('done')
            })
          })
      })
      .end()

    let responseResult = []
    function sendRequestWrapper (index, done) {
      sendRequest(index, options, function (err) {
        done(err)
      })
    }
    function sendRequest (index, options) {
      let requestResult = []
      let resultMatchInfo

      options.path = `/shards/${country}/matches/${MatchesId[index].id}`

      https
        .request(options, function (response) {
          response
            .on('data', function (data) {
              requestResult.push(data)
            })
            .on('end', function () {
              console.log('end', index)
              let data = Buffer.concat(requestResult).toString()
              resultMatchInfo = JSON.parse(data)
              responseResult.push(resultMatchInfo)
              if (responseResult.length >= 5) {
                res.json(responseResult)
              }
            })
        })
        .end()
    }
  })
}
