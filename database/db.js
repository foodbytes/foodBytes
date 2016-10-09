const env = process.env.NODE_ENV || 'development'
const knexConfig = require('../knexfile')[env];
const knex = require('knex')(knexConfig);
const transformJoin = require('../helpers/transformjoin')

const getRecipesTable = () => knex('recipes').orderBy('id')

const getStepsTable = id => knex('steps').where('recipe_id', id)

const getJoinTable = (id) => {
  return knex('recipes')
        .where('recipe_id',id)
        .innerJoin('steps', 'recipes.id', '=', 'steps.recipe_id')
        .orderBy('steps.id')
        .then((rows) => transformJoin(rows))
}

module.exports = {
  getRecipesTable,
  getStepsTable,
  getJoinTable
}
