
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('recipes').insert({id: 0, audio: 'public/audio/grilledCheese/cheddarCheese.mp3'}),
      ]);
    });
};
