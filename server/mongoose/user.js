var mongoose = require('mongoose')
var Schema = mongoose.Schema

var pubgUserSchema = new Schema(
  {
    nickName: String,
    userId: String,
    region: String,
    userGameInfo: [
      {
        playType: String,
        rating: Number,
        killDeath: Number
      }
    ]
  },
  { collection: 'user' }
)

var User = mongoose.model('user', pubgUserSchema)
module.exports = User
