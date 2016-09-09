let knexConfig = require('../knexfile').development;
let knex = require('knex')(knexConfig);
let transformJoin = require('../helpers/transformjoin')


const getRecipesTable =  (id)=>{

  return knex('recipes').where('id', id)
}

const getStepsTable =  (id)=>{

  return knex('steps').where('recipe_id', id)
}

// call getStepsTable and store in a letiable
// attach that let to the end getRecipesTable

const getJoinTable = (id) => {

  return knex.table('recipes').where('recipe_id',id).innerJoin('steps', 'recipes.id', '=', 'steps.recipe_id')
        .then(function (rows){
          return transformJoin(rows)
        })



}


module.exports = {
  getRecipesTable,
  getStepsTable,
  getJoinTable
}
