var https = require('https')
var serverPrivate = require('../../serverprivate')

module.exports = function (app) {
  app.get('/newPubg', (req, res) => {
    const { nickname, country } = req.query

    let options = {
      host: 'api.playbattlegrounds.com',
      path: `/shards/${country}/players?filter[playerNames]=${nickname}`,
      method: 'GET',
      headers: {
        Accept: 'application/vnd.api+json',
        Authorization: serverPrivate.authKey
      }
    }

    // let callPubgInfoByID = id => {
    //   let pubgApiUrl = `https://api.playbattlegrounds.com/shards/${
    //     this.country
    //   }/matches/${id}`

    //   this.$http.get(pubgApiUrl).then(response => {
    //     this.matches.push(response.body.included)
    //     this.getCurrentUserStats()
    //   })
    // }

    let callPubgByMatchID = id => {
      console.log('id', id)

      let options = {
        host: 'api.playbattlegrounds.com',
        path: `/shards/${country}/matches/${id}`,
        method: 'GET',
        headers: {
          Accept: 'application/vnd.api+json',
          Authorization: serverPrivate.authKey
        }
      }
      let result = []
      let schema

      https
        .request(options, function (response) {
          response
            .on('data', function (data) {
              result.push(data)
            })
            .on('end', function () {
              let data = Buffer.concat(result).toString()
              schema = JSON.parse(data)
            })
        })
        .end()

      return schema
    }

    https
      .request(options, function (response) {
        response.on('data', function (chunk) {
          let result = JSON.parse(chunk)
          let test = []
          test.push(result.data[0].relationships.matches.data[0])

          let matchResult = test.map(({ id }) => callPubgByMatchID(id))

          Promise.all(matchResult).then(data => {
            // console.log('data', data)
          })

          res.json(matchResult)
        })
      })
      .end()
  })
}
