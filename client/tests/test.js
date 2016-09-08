var request = require('supertest')
var test = require('tape')
var app = require('../app')

test('testing', function (t) {
  t.ok(true)
  t.end()
})

request(app)
  .get('/api/v1/recipes/')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    var data = res.body
    test('api delivers the right data', (t) => {
      t.error(err, 'there should be no error')

      t.true(data.id, 'there is a top level "id" key')

      t.true(Array.isArray(data.s.transactions), 'a "transactions" array is delivered')

      t.equal(Number(data.id), 1, 'account id is the same as url')

      t.end()
      process.exit()
    })
  })