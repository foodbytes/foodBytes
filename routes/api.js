let express = require('express');
let router = express.Router();

let {getRecipesTable, getStepsTable, getJoinTable} = require('../database/db.js');

// the route should hint at the which sets of data you're getting back
router.get('/recipes/:id/steps', (req, res) => {
  const id = req.params.id

  getRecipeAndSteps(id)   // 
    .then( data => res.json(data) )
    .catch( err => res.status(500).send(err) )
})

router.get('/recipes', (req, res) => {
  getRecipesTable()
    .then( data => res.json(data) )
    .catch( err => res.status(500).send(err) )
})

// might not be used?
//router.get('/recipes/:id/steps', (req, res) => {
  //let id = req.params.id
  //getStepsTable(id)
    //.then( data => {
      //res.json(data)
    //})
    //.catch( err => res.status(500).send(err) )
//})


module.exports = router;

