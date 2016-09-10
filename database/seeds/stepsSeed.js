
exports.seed = function(knex, Promise) {
  return knex('steps').del()
    .then(function () {
      return Promise.all([
        knex('steps').insert({id: 0, recipe_id: 0, instructions: 'Step One: Put the cheese between the slices of bread.', audio_path: 'https://www.youtube.com/watch?v=2lmBUq1Zd34' }),
        knex('steps').insert({id: 1, recipe_id: 0, instructions: 'Step Two: Heat a fry pan to a hot temperature.', audio_path: 'https://www.youtube.com/watch?v=l7H4aNciRh8'}),
        knex('steps').insert({id: 2, recipe_id: 0, instructions: 'Step Three: Heat one tablespoon of butter in the fry pan.', audio_path: 'https://www.youtube.com/watch?v=SGTPnvW4jpw'}),
        knex('steps').insert({id: 3, recipe_id: 1, instructions: 'Step One: Put some bread in a bowl.', audio_path: 'https://www.youtube.com/watch?v=2lmBUq1Zd34' }),
        knex('steps').insert({id: 4, recipe_id: 1, instructions: 'Step Two: Put some bananas in the bowl.', audio_path: 'https://www.youtube.com/watch?v=l7H4aNciRh8'}),
        knex('steps').insert({id: 5, recipe_id: 1, instructions: 'Step Three: Mix it all up.', audio_path: 'https://www.youtube.com/watch?v=SGTPnvW4jpw'})
      ]);
    });
};
