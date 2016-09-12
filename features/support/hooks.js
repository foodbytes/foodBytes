const app = require('../../server')
const config = require('./config')

let server

module.exports = function () {

  this.registerHandler('BeforeFeatures', (features, callback) => {
    console.log('server starting....')
    server = app.listen(config.proxy.port, () => {
      callback()
    })
  })

  this.registerHandler('AfterFeatures', (features, callback) => {
    console.log('server stopping....')
    server.close()
    callback()
  })
}
