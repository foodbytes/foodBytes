
exports.up = function(knex, Promise) {
  return knex.schema.table('recipes', function (table) {
    table.binary('audio');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('recipes', function (table) {
    table.dropTable('audio');
  });
};
