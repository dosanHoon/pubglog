var express = require('express')
var app = express()
var router = require('./router/main')(app)
var path = require('path')

app.set('views', path.join(__dirname, '../dist'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(express.static(path.join(__dirname, '../dist/static')))
app.use('/static', express.static(path.join(__dirname, '../dist/static')))

var server = app.listen(3000, function () {
  console.log('Express server has started on port 3000')
})
