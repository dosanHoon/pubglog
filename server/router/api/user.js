var https = require('https')
var serverPrivate = require('../../serverprivate')
var User = require('../../mongoose').User

module.exports = function (app) {
  app.post('/addUser', (req, res) => {
    var newUser = new User({
      nickName: req.body.nickName,
      userId: req.body.userId,
      region: req.body.region,
      userGameInfo: req.body.userGameInfo
    })

    newUser.save((err, result) => {
      if (err) {
        console.log('save failed ' + err)
      }
      console.log('saved successfully ' + newUser.item)
      res.redirect('/')
    })
  })

  app.get('/pubgId', (req, res) => {
    const { country, nickname } = req.query

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
    let resposeResult = {
      returnCode: 0,
      resultValue: ''
    }

    https
      .request(options, function (response) {
        response
          .on('data', function (data) {
            result.push(data)
          })
          .on('end', function () {
            let data = Buffer.concat(result).toString()
            resultForId = JSON.parse(data)
            if (resultForId.data) {
              id = resultForId.data.map(({ id }) => id)
              resposeResult.resultValue = id[0]
              res.json(resposeResult)
            } else if (resultForId.errors) {
              resposeResult.returnCode = -100
              resposeResult.resultValue = resultForId.errors[0]

              res.json(resposeResult)
            }
          })
      })
      .end()
  })
}
