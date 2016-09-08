let knexConfig = require('../knexfile').development;
let knex = require('knex')(knexConfig);


const getRecipesTable =  ()=>{

  return knex.select('*').table('recipes')
}

const getStepsTable =  ()=>{

  return knex.select('*').table('steps')
}

module.exports = {
  getRecipesTable,
  getStepsTable
}
