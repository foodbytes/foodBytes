exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('recipes', function (table) {
    table.integer('id').primary();
    table.string('name');
    table.string('description');
    table.string('cooking_time');
    table.string('ingredients');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
