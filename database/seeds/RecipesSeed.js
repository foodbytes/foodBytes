
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('recipes').insert({name: 'Grilled cheese sandwich',
                                description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
                                cooking_time: '10 mins',
                                ingredients: ['Two slices of cheddar or swiss cheese',
                                              'Two slices of white bread',
                                              'Two tablespoons of butter'
                                             ]
                              }),

      ]);
    });
};
