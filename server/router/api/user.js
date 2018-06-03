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
}
