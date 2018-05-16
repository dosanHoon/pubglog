module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index.html')
  })

  app.get('/pubglog', function (req, res) {
    res.render('index.html')
  })
}
