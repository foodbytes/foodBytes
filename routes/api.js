let express = require('express');
let router = express.Router();

let {getRecipesTable, getStepsTable, getJoinTable} = require('../database/db.js');

router.get('/', function(req, res, next) {
  res.send('index.html');
});

router.get('/api/v1/recipes/:id', (req, res) => {
  let id = req.params.id
  getJoinTable(id)
    .then( data => {
      res.json(data)
    })
    .catch( err => res.status(500).send(err) )
})

router.get('/api/v1/recipes/', (req, res) => {
  getRecipesTable()
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
