
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
          notes:'Cheddar cheese with brown bread works as well',
          cooking_time: '10 mins',
          ingredients: 'Two slices of cheddar or swiss cheese@Two slices of white bread@Two tablespoons of butter',
          length: 3
        }),
        knex('recipes').insert({
          id: 1,
          name: 'Roast Chicken with Prune and Apricot Stuffing and Pan Jus',
          description: 'A succulent Roast Chicken dish',
          notes:'My preference is for corn-fed chickens as they are plump and the meat is moist. Frozen chickens are always handy to have on hand but a fresh chicken will produce crisper skin and juicer meat. To thaw a frozen whole chicken the most efficient method is to place the frozen bird in its plastic wrapping into the sink and run a continuous gentle stream of cold water over it.',
          cooking_time: '1 hours 30 mins',
          ingredients: '1.3-1.5kg (1 size 14) chicken@Prune and Apricot Stuffing@3-4 rashers streaky rindless bacon@2 tablespoons olive oil + extra for oiling roasting pan@3-4 small rosemary sprigs@2 cups white wine, chicken stock liquid, a mixture of both, or half of either  with cold  water. added for volume@½ teaspoon flaky sea salt@1/8 teaspoon freshly ground black pepper@2 tablespoons olive oil',
          length: 3
        })
      ]);
    });
};
