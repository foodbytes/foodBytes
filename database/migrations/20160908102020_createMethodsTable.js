exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('methods', function (table) {
    table.increments('id').primary();
    table.string('name').foreign().references('recipe_name');
    table.string('text');
    table.string('audio');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('methods');
};
