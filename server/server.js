var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')
var mongoose = require('mongoose')
var cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var router = require('./router/main')(app)

mongoose.connect('mongodb://localhost:27017/pubg_log')
var db = mongoose.connection

db.once('open', () => {
  console.log('몽구스와 연결됨')
})

app.set('views', path.join(__dirname, '../dist'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(express.static(path.join(__dirname, '../dist/static')))
app.use('/static', express.static(path.join(__dirname, '../dist/static')))

var server = app.listen(3000, function () {
  console.log('Express server has started on port 3000')
})
