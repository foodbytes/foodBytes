exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('recipes', function (table) {
    table.integer('id').primary();
    table.string('name');
    table.text('description');
    table.text('notes');
    table.string('cooking_time');
    table.text('ingredients');
    table.integer('length');
    table.text('whole_recipe_audio_path');
    table.text('ingredients_audio_path');

    // add table timestamps - created_at updated_at
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
