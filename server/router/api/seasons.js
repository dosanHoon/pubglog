var https = require('https')
var serverPrivate = require('../../serverprivate')

module.exports = function (app) {
  app.get('/seasons', (req, res) => {
    const { country } = req.query

    let options = {
      host: 'api.playbattlegrounds.com',
      path: `/shards/${country}/seasons`,
      method: 'GET',
      headers: {
        Accept: 'application/vnd.api+json',
        Authorization: serverPrivate.authKey
      }
    }

    https
      .request(options, function (response) {
        response.on('data', function (chunk) {
          let result = JSON.parse(chunk)

          res.json(result)
        })
      })
      .end()
  })
}
