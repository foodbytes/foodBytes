let knexConfig = require('../knexfile').development;
let knex = require('knex')(knexConfig);


const getRecipesTable =  ()=>{

  return knex.select('*').table('recipes')
}

const getStepsTable =  ()=>{

  return knex.select('*').table('steps')
}

const getJoinTable = () => {

  return knex.table('recipes').innerJoin('steps', 'recipes.id', '=', 'steps.recipe_id')

}

module.exports = {
  getRecipesTable,
  getStepsTable,
  getJoinTable
}
