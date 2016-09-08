exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('steps', function (table) {
    table.integer('id').primary();
    table.string('recipe_id').references('id');
    table.string('instructions');
    table.string('audio_path');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('steps');
};
