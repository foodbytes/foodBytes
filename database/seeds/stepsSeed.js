
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('steps').insert({id: 0, recipe_id: 0, instructions: 'step_one', audio_path: '../audio/stepOne.mp3' }),
        knex('steps').insert({id: 1, recipe_id: 0, instructions: 'step_two', audio_path: '../audio/stepTwo.mp3'}),
        knex('steps').insert({id: 2, recipe_id: 0, instructions: 'step_three', audio_path: '../audio/stepThree.mp3'})
      ]);
    });
};
