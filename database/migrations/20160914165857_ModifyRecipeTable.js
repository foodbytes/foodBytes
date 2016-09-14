
exports.up = function(knex, Promise) {
  return knex.schema.table('recipes', function (table) {
    table.text('recipePage_image_path');
    table.text('recipeList_image_path');
    table.dropColumn('image_path');

  })

};

exports.down = function(knex, Promise) {
  return knex.schema.table('recipes', function (table) {
    table.text('image_path');
    table.dropColumn('recipePage_image_path');
    table.dropColumn('recipeList_image_path');
  })
};
