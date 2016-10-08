
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fallback = require('express-history-api-fallback')

const api = require('./routes/api')

const server = express()
const root = __dirname + '/public'

// view engine setup
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'hbs')

// uncomment after placing your favicon in /public
//server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
server.use(logger('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cookieParser())
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.static(root))

server.use('/', api)
server.use(fallback('index.html', { root: root }))

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
  server.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: server.get('env') === 'production' ? {} : err
    })
  })

module.exports = server
