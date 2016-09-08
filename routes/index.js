let express = require('express');
let router = express.Router();
//let {getRecipe}  = require('../config/database/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/v1/*', (req, res, next) => {
    res.redirect('/')
})

// router.get('/api/v1/recipes/:id', (req, res) => {
//   let id = req.params.id
//   getRecipe(id)
//     .then( data => {
//       res.json(data)
//     })
//     .catch( err => res.status(500).send(err) )
// })


module.exports = router;
