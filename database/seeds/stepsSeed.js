
exports.seed = function(knex, Promise) {
  return knex('steps').del()
    .then(function () {
      return Promise.all([
        knex('steps').insert({id: 0, recipe_id: 0, instructions: 'Step One: Put the cheese between the slices of bread ', audio_path: 'https://www.youtube.com/watch?v=2lmBUq1Zd34' }),
        knex('steps').insert({id: 1, recipe_id: 0, instructions: 'Step Two: Heat a fry pan to a hot temperature', audio_path: 'https://www.youtube.com/watch?v=l7H4aNciRh8'}),
        knex('steps').insert({id: 2, recipe_id: 0, instructions: 'Step Three: Heat one tablespoon of butter in the fry pan', audio_path: 'https://www.youtube.com/watch?v=SGTPnvW4jpw'}),
        knex('steps').insert({id: 3, recipe_id: 1, instructions: 'Step One: Preheat oven to 180ºC', audio_path: '../audio/stepOne.mp3' }),
        knex('steps').insert({id: 4, recipe_id: 1, instructions: 'Step Two: Remove any giblets and the neck from chicken.  With cold water wash inside and outside of chicken and pat dry using paper towels.', audio_path: '../audio/stepTwo.mp3'}),
        knex('steps').insert({id: 5, recipe_id: 1, instructions: 'Step Three: Push Prune and Apricot Stuffing into cavity of chicken and secure opening with toothpicks or bamboo skewers.  {There will be stuffing remaining so form it into small walnut-sized balls and wrap in bacon to add to roasting pan during the last 30 minutes of the cooking time.}', audio_path: '../audio/stepThree.mp3'}),
        knex('steps').insert({id: 6, recipe_id: 1, instructions: 'Step Four: Fold chicken wings back on themselves to prevent them from flopping out when cooking.', audio_path: '../audio/stepOne.mp3' }),
        knex('steps').insert({id: 7, recipe_id: 1, instructions: 'Step Five: Heat a large heavy based fry pan over a medium heat and add oil.  Place chicken, breast side down in fry pan and sear for 1-2 minutes till golden brown.  Turn chicken onto its side and continue this process till each side is golden brown.', audio_path: '../audio/stepTwo.mp3'}),
        knex('steps').insert({id: 8, recipe_id: 1, instructions: 'Step Six: Lightly oil a roasting pan and add rosemary to the base.  Place chicken on top of rosemary.', audio_path: '../audio/stepThree.mp3'}),
        knex('steps').insert({id: 9, recipe_id: 1, instructions: 'Step Seven: Place roasting pan in oven and roast for 1 + 1/4 hours or until chicken juices run clear when pierced with a fork. {Don’t forget to add bacon-wrapped stuffing balls to roasting pan after 45 minutes of chicken roasting time.}', audio_path: '../audio/stepThree.mp3'}),
        knex('steps').insert({id: 10, recipe_id: 1, instructions: 'Step Eight: Remove chicken from pan and rest chicken for 10 minutes, away from heat covered with a heavy tea towel. Discard rosemary.', audio_path: '../audio/stepThree.mp3'}),
        knex('steps').insert({id: 11, recipe_id: 1, instructions: 'Step Nine: Place roasting pan onto a medium heat and pour wine into pan.  Using a wooden spoon scrape up any baked on bits from the base of the roasting pan and reduce liquid to about 1/3. Add salt and pepper and slowly pour in olive oil whisking as you pour. If you wish strain jus.', audio_path: '../audio/stepThree.mp3'}),
        knex('steps').insert({id: 12, recipe_id: 1, instructions: 'Step ten: Carve chicken with stuffing and serve with jus and stuffing balls. If you wish accompany with roast kumara and silver beet finished with sherry vinegar.', audio_path: '../audio/stepThree.mp3'}),
        knex('steps').insert({id: 13, recipe_id: 2, instructions: 'Step One: Into a medium sized bowl place breadcrumbs, prunes, apricots, pine nuts and lemon zest.', audio_path: 'https://www.youtube.com/watch?v=2lmBUq1Zd34' }),
        knex('steps').insert({id: 14, recipe_id: 2, instructions: 'Step Two: Into a small fry pan set over a medium heat add butter and melt. Add onion and cook till soft and transparent but not brown.  Add rosemary and combine. Cool.', audio_path: 'https://www.youtube.com/watch?v=l7H4aNciRh8'}),
        knex('steps').insert({id: 15, recipe_id: 2, instructions: 'Step Three: Add onion mixture to breadcrumb mixture and combine.  Add egg and salt and pepper and mix together.', audio_path: 'https://www.youtube.com/watch?v=SGTPnvW4jpw'}),

      ]);
    });
};
