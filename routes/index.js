let express = require('express');
let router = express.Router();

let {getRecipesTable, getStepsTable, getJoinTable} = require('../database/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index.html');
});

// router.get('/api/v1/*', (req, res, next) => {
//     res.redirect('/')
// })

router.get('/api/v1/recipes/:id/join', (req, res) => {
  let id = req.params.id
  getJoinTable(id)
    .then( data => {
      console.log('HOLA ', data);
      res.json(data)
    })
    .catch( err => res.status(500).send(err) )
})


router.get('/api/v1/recipes/:id', (req, res) => {
  let id = req.params.id
  getRecipesTable(id)
    .then( data => {
      res.json(data)
    })
    .catch( err => res.status(500).send(err) )
})

router.get('/api/v1/recipes/:id/steps', (req, res) => {
  let id = req.params.id
  getStepsTable(id)
    .then( data => {
      res.json(data)
    })
    .catch( err => res.status(500).send(err) )
})


module.exports = router;
