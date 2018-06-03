var https = require('https')
var serverPrivate = require('../../serverprivate')

module.exports = function (app) {
  app.post('/newPubg', (req, res) => {
    const { nickName, country } = req.body

    let options = {
      host: 'api.playbattlegrounds.com',
      path: `/shards/${country}/players?filter[playerNames]=${nickName}`,
      method: 'GET',
      headers: {
        Accept: 'application/vnd.api+json',
        Authorization: serverPrivate.authKey
      }
    }

    let callPubgInfoByID = id => {
      let pubgApiUrl = `https://api.playbattlegrounds.com/shards/${
        this.country
      }/matches/${id}`

      this.$http.get(pubgApiUrl).then(response => {
        this.matches.push(response.body.included)
        this.getCurrentUserStats()
      })
    }

    https
      .request(options, function (response) {
        response.on('data', function (chunk) {
          res.json(JSON.parse(chunk))
        })
      })
      .end()
  })
}
