exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('recipes', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('description');
    table.string('cooking_time');
    table.specificType('ingredients', 'text[]');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
