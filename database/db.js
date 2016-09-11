let knexConfig = require('../knexfile').development;
let knex = require('knex')(knexConfig);
let transformJoin = require('../helpers/transformjoin')


const getRecipesTable =  ()=>{

  return knex('recipes')
}

const getStepsTable =  (id)=>{

  return knex('steps').where('recipe_id', id)
}

const getJoinTable = (id) => {

  return knex.table('recipes').where('recipe_id',id).innerJoin('steps', 'recipes.id', '=', 'steps.recipe_id')
        .orderBy('steps.id')
        .then(function (rows){
          return transformJoin(rows)
        })
}

module.exports = {
  getRecipesTable,
  getStepsTable,
  getJoinTable
}
