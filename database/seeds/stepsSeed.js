
exports.seed = function(knex, Promise) {
  return knex('steps').del()
    .then(function () {
      return Promise.all([

        knex('steps').insert({id: 0, recipe_id: 0, step_id: 1, instructions: 'Put the cheese between the slices of bread ', steps_audio_path: '../audio/stepOne.mp3' }),
        knex('steps').insert({id: 1, recipe_id: 0, step_id: 2, instructions: 'Heat a fry pan to a hot temperature', steps_audio_path: '../audio/stepTwo.mp3'}),
        knex('steps').insert({id: 2, recipe_id: 0, step_id: 3, instructions: 'Step Three: Heat one tablespoon of butter in the fry pan', steps_audio_path: '../audio/stepThree.mp3'}),
        knex('steps').insert({id: 3, recipe_id: 1, step_id: 1, instructions: 'Preheat oven to 180ºC', steps_audio_path: '../audio/stepOne.mp3' }),
        knex('steps').insert({id: 4, recipe_id: 1, step_id: 2, instructions: 'Remove any giblets and the neck from chicken.  With cold water wash inside and outside of chicken and pat dry using paper towels.', steps_audio_path: '../audio/stepTwo.mp3'}),
        knex('steps').insert({id: 5, recipe_id: 1, step_id: 3, instructions: 'Push Prune and Apricot Stuffing into cavity of chicken and secure opening with toothpicks or bamboo skewers.  {There will be stuffing remaining so form it into small walnut-sized balls and wrap in bacon to add to roasting pan during the last 30 minutes of the cooking time.}', steps_audio_path: '../audio/stepThree.mp3'}),
        knex('steps').insert({id: 6, recipe_id: 1, step_id: 4, instructions: 'Fold chicken wings back on themselves to prevent them from flopping out when cooking.', steps_audio_path: '../audio/stepOne.mp3' }),
        knex('steps').insert({id: 7, recipe_id: 1, step_id: 5, instructions: 'Heat a large heavy based fry pan over a medium heat and add oil.  Place chicken, breast side down in fry pan and sear for 1-2 minutes till golden brown.  Turn chicken onto its side and continue this process till each side is golden brown.', steps_audio_path: '../audio/stepTwo.mp3'}),
        knex('steps').insert({id: 8, recipe_id: 1, step_id: 6, instructions: 'Lightly oil a roasting pan and add rosemary to the base.  Place chicken on top of rosemary.', steps_audio_path: '../audio/stepThree.mp3'}),
        knex('steps').insert({id: 9, recipe_id: 1, step_id: 7, instructions: 'Place roasting pan in oven and roast for 1 + 1/4 hours or until chicken juices run clear when pierced with a fork. {Don’t forget to add bacon-wrapped stuffing balls to roasting pan after 45 minutes of chicken roasting time.}', steps_audio_path: '../audio/stepThree.mp3'}),
        knex('steps').insert({id: 10, recipe_id: 1, step_id: 8, instructions: 'Remove chicken from pan and rest chicken for 10 minutes, away from heat covered with a heavy tea towel. Discard rosemary.', steps_audio_path: '../audio/stepThree.mp3'}),
        knex('steps').insert({id: 11, recipe_id: 1, step_id: 9, instructions: 'Place roasting pan onto a medium heat and pour wine into pan.  Using a wooden spoon scrape up any baked on bits from the base of the roasting pan and reduce liquid to about 1/3. Add salt and pepper and slowly pour in olive oil whisking as you pour. If you wish strain jus.', steps_audio_path: '../audio/stepThree.mp3'}),
        knex('steps').insert({id: 12, recipe_id: 1, step_id: 10, instructions: 'Carve chicken with stuffing and serve with jus and stuffing balls. If you wish accompany with roast kumara and silver beet finished with sherry vinegar.', steps_audio_path: '../audio/stepThree.mp3'}),
        knex('steps').insert({id: 13, recipe_id: 2, step_id: 1,instructions: 'Into a medium sized bowl place breadcrumbs, prunes, apricots, pine nuts and lemon zest.', steps_audio_path: 'https://www.youtube.com/watch?v=2lmBUq1Zd34' }),
        knex('steps').insert({id: 14, recipe_id: 2, step_id: 2,instructions: 'Into a small fry pan set over a medium heat add butter and melt. Add onion and cook till soft and transparent but not brown.  Add rosemary and combine. Cool.', steps_audio_path: 'https://www.youtube.com/watch?v=l7H4aNciRh8'}),
        knex('steps').insert({id: 15, recipe_id: 2, step_id: 3,instructions: 'Add onion mixture to breadcrumb mixture and combine.  Add egg and salt and pepper and mix together.', steps_audio_path: 'https://www.youtube.com/watch?v=SGTPnvW4jpw'})

      ]);
    });
};

// future possibility : add col with step: 2,3....
// create function which turns that into a string
// 1 --> Step One
// 2 --> Step Two
