
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('recipes').insert({
          id: 0,
          name: 'Grilled cheese sandwich',
          description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
          cooking_time: '10 mins',
          ingredients: 'Two slices of cheddar or swiss cheese,Two slices of white bread,Two tablespoons of butter'
        }),
        knex('recipes').insert({
          id: 1,
          name: 'banana bread',
          description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
          cooking_time: '10 mins',
          ingredients: 'Two slices of cheddar or swiss cheese,Two slices of white bread,Two tablespoons of butter'
        })
      ]);
    });
};
