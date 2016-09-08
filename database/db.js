let knexConfig = require('../knexfile').development;
let knex = require('knex')(knexConfig);


const getRecipesTable =  (id)=>{

  return knex('recipes').where('id', id)
}

const getStepsTable =  (id)=>{

  return knex('steps').where('recipe_id', id)
}

const getJoinTable = () => {

  return knex.table('recipes').innerJoin('steps', 'recipes.id', '=', 'steps.recipe_id')

}

module.exports = {
  getRecipesTable,
  getStepsTable,
  getJoinTable
}
