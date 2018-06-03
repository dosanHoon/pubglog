var page = require('./page')
var api = require('./api/user')
var newPubg = require('./api/newPubg')

module.exports = function (app) {
  api(app)
  page(app)
  newPubg(app)
}
