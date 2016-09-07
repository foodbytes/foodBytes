exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('methods', function (table) {
    table.increments('id').primary();
    table.string('name').foreign().references('recipe_name');
    table.specificType('text_method', 'text[]');
    table.specificType('text_audio_steps', 'text[]');
    table.specificType('audio', 'text[]');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('methods');
};
