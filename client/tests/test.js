var request = require('supertest')
var test = require('tape')
var router = require('../../routes/index')

test('testing', function (t) {
  t.ok(true)
  t.end()
})

request(router)
  .get('/api/v1/recipes/:id')
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



  //reducer testing



  //join testing?

// var audioArray = [
//  document.getElementById('stepOne'),
//  document.getElementById('stepTwo'),
//  document.getElementById('stepThree')
// ]

// var index = -1

// recognition.onresult = function(event) {
//   console.log(event)
//   var command = event.results[0][0].transcript;
//   switch (command) {
//       case "next":
//         if (audioArray[index+1]) {
//           index++
//           audioArray[index].play()
//       };




