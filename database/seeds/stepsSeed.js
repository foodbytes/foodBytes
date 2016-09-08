
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('table_name').insert({id: 0, recipe_id: 0, instructions: 'step_one', audio_path: 'rowValue1' }),
        knex('table_name').insert({id: 1, recipe_id: 0, instructions: 'step_two', audio_path: 'rowValue1'}),
        knex('table_name').insert({id: 2, recipe_id: 0, instructions: 'step_three', audio_path: 'rowValue1'})
      ]);
    });
};
