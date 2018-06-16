var page = require('./page')
var api = require('./api/user')
var newPubg = require('./api/newPubg')
var seasonStats = require('./api/seasonStats')
var seasons = require('./api/seasons')

module.exports = function (app) {
  api(app)
  page(app)
  newPubg(app)
  seasonStats(app)
  seasons(app)
}
