import test from 'tape'
import freeze from 'deep-freeze'

import reducer from '../../reducers'
import { NEXT } from '../../actions/actionCreators'

test('reducer with basic NEXT action', t=> {

  var action = {
    type: NEXT
  }

  var fakeState = {
    recipe:{
      id: 1,
      name: "Roast Chicken with Prune and Apricot Stuffing and Pan Jus",
      description: "A succulent Roast Chicken dish",
      notes: "My preference is for corn-fed chickens as they are plump and the meat is moist. Frozen chickens are always handy to have on hand but a fresh chicken will produce crisper skin and juicer meat. To thaw a frozen whole chicken the most efficient method is to place the frozen bird in its plastic wrapping into the sink and run a continuous gentle stream of cold water over it.",
      ingredients: "1.3-1.5kg (1 size 14) chicken@Prune and Apricot Stuffing@3-4 rashers streaky rindless bacon@2 tablespoons olive oil + extra for oiling roasting pan@3-4 small rosemary sprigs@2 cups white wine, chicken stock liquid, a mixture of both, or half of either with cold water. added for volume@½ teaspoon flaky sea salt@1/8 teaspoon freshly ground black pepper@2 tablespoons olive oil",
      cooking_time: "1 hours 30 mins",
      length: 10,
      currentStep:9,
      whole_recipe_audio_path: "../audio/wholeRecipe.mp3",
      ingredients_audio_path: "../audio/ingredients.mp3",
      image_path: "../images/roast-chicken-with-apricot-stuffing_grande.jpeg",
      instructions: [
      "Preheat oven to 180ºC",
      "Remove any giblets and the neck from chicken. With cold water wash inside and outside of chicken and pat dry using paper towels.",
      "Push Prune and Apricot Stuffing into cavity of chicken and secure opening with toothpicks or bamboo skewers. {There will be stuffing remaining so form it into small walnut-sized balls and wrap in bacon to add to roasting pan during the last 30 minutes of the cooking time.}",
      "Fold chicken wings back on themselves to prevent them from flopping out when cooking.",
      "Heat a large heavy based fry pan over a medium heat and add oil. Place chicken, breast side down in fry pan and sear for 1-2 minutes till golden brown. Turn chicken onto its side and continue this process till each side is golden brown.",
      "Lightly oil a roasting pan and add rosemary to the base. Place chicken on top of rosemary.",
      "Place roasting pan in oven and roast for 1 + 1/4 hours or until chicken juices run clear when pierced with a fork. {Don’t forget to add bacon-wrapped stuffing balls to roasting pan after 45 minutes of chicken roasting time.}",
      "Remove chicken from pan and rest chicken for 10 minutes, away from heat covered with a heavy tea towel. Discard rosemary.",
      "Place roasting pan onto a medium heat and pour wine into pan. Using a wooden spoon scrape up any baked on bits from the base of the roasting pan and reduce liquid to about 1/3. Add salt and pepper and slowly pour in olive oil whisking as you pour. If you wish strain jus.",
      "Carve chicken with stuffing and serve with jus and stuffing balls. If you wish accompany with roast kumara and silver beet finished with sherry vinegar."
      ],
      steps_audio_path: [
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3"
      ],
      active_audio_path: [
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3"
      ],
      playing: true,
      listening: false
    },
    routing: { locationBeforeTransitions: null }
  }

  freeze(fakeState)

  var expectedState = {
    recipe:{
      id: 1,
      name: "Roast Chicken with Prune and Apricot Stuffing and Pan Jus",
      description: "A succulent Roast Chicken dish",
      notes: "My preference is for corn-fed chickens as they are plump and the meat is moist. Frozen chickens are always handy to have on hand but a fresh chicken will produce crisper skin and juicer meat. To thaw a frozen whole chicken the most efficient method is to place the frozen bird in its plastic wrapping into the sink and run a continuous gentle stream of cold water over it.",
      ingredients: "1.3-1.5kg (1 size 14) chicken@Prune and Apricot Stuffing@3-4 rashers streaky rindless bacon@2 tablespoons olive oil + extra for oiling roasting pan@3-4 small rosemary sprigs@2 cups white wine, chicken stock liquid, a mixture of both, or half of either with cold water. added for volume@½ teaspoon flaky sea salt@1/8 teaspoon freshly ground black pepper@2 tablespoons olive oil",
      cooking_time: "1 hours 30 mins",
      length: 10,
      currentStep:10,
      whole_recipe_audio_path: "../audio/wholeRecipe.mp3",
      ingredients_audio_path: "../audio/ingredients.mp3",
      image_path: "../images/roast-chicken-with-apricot-stuffing_grande.jpeg",
      instructions: [
      "Preheat oven to 180ºC",
      "Remove any giblets and the neck from chicken. With cold water wash inside and outside of chicken and pat dry using paper towels.",
      "Push Prune and Apricot Stuffing into cavity of chicken and secure opening with toothpicks or bamboo skewers. {There will be stuffing remaining so form it into small walnut-sized balls and wrap in bacon to add to roasting pan during the last 30 minutes of the cooking time.}",
      "Fold chicken wings back on themselves to prevent them from flopping out when cooking.",
      "Heat a large heavy based fry pan over a medium heat and add oil. Place chicken, breast side down in fry pan and sear for 1-2 minutes till golden brown. Turn chicken onto its side and continue this process till each side is golden brown.",
      "Lightly oil a roasting pan and add rosemary to the base. Place chicken on top of rosemary.",
      "Place roasting pan in oven and roast for 1 + 1/4 hours or until chicken juices run clear when pierced with a fork. {Don’t forget to add bacon-wrapped stuffing balls to roasting pan after 45 minutes of chicken roasting time.}",
      "Remove chicken from pan and rest chicken for 10 minutes, away from heat covered with a heavy tea towel. Discard rosemary.",
      "Place roasting pan onto a medium heat and pour wine into pan. Using a wooden spoon scrape up any baked on bits from the base of the roasting pan and reduce liquid to about 1/3. Add salt and pepper and slowly pour in olive oil whisking as you pour. If you wish strain jus.",
      "Carve chicken with stuffing and serve with jus and stuffing balls. If you wish accompany with roast kumara and silver beet finished with sherry vinegar."
      ],
      steps_audio_path: [
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3"
      ],
      active_audio_path: [
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3"
      ],
      playing: true,
      listening: false
    },
    routing: { locationBeforeTransitions: null }
  }

  let actualState = reducer(fakeState, action)
  t.deepEqual(actualState, expectedState, 'the reducer increments the current step')
  t.end()
})

test('reducer with basic NEXT action when called at end of recipe steps', t=> {
  var action = {
    type: NEXT
  }
  var fakeState = {
    recipe:{
      id: 1,
      name: "Roast Chicken with Prune and Apricot Stuffing and Pan Jus",
      description: "A succulent Roast Chicken dish",
      notes: "My preference is for corn-fed chickens as they are plump and the meat is moist. Frozen chickens are always handy to have on hand but a fresh chicken will produce crisper skin and juicer meat. To thaw a frozen whole chicken the most efficient method is to place the frozen bird in its plastic wrapping into the sink and run a continuous gentle stream of cold water over it.",
      ingredients: "1.3-1.5kg (1 size 14) chicken@Prune and Apricot Stuffing@3-4 rashers streaky rindless bacon@2 tablespoons olive oil + extra for oiling roasting pan@3-4 small rosemary sprigs@2 cups white wine, chicken stock liquid, a mixture of both, or half of either with cold water. added for volume@½ teaspoon flaky sea salt@1/8 teaspoon freshly ground black pepper@2 tablespoons olive oil",
      cooking_time: "1 hours 30 mins",
      length: 10,
      currentStep:10,
      whole_recipe_audio_path: "../audio/wholeRecipe.mp3",
      ingredients_audio_path: "../audio/ingredients.mp3",
      image_path: "../images/roast-chicken-with-apricot-stuffing_grande.jpeg",
      instructions: [
      "Preheat oven to 180ºC",
      "Remove any giblets and the neck from chicken. With cold water wash inside and outside of chicken and pat dry using paper towels.",
      "Push Prune and Apricot Stuffing into cavity of chicken and secure opening with toothpicks or bamboo skewers. {There will be stuffing remaining so form it into small walnut-sized balls and wrap in bacon to add to roasting pan during the last 30 minutes of the cooking time.}",
      "Fold chicken wings back on themselves to prevent them from flopping out when cooking.",
      "Heat a large heavy based fry pan over a medium heat and add oil. Place chicken, breast side down in fry pan and sear for 1-2 minutes till golden brown. Turn chicken onto its side and continue this process till each side is golden brown.",
      "Lightly oil a roasting pan and add rosemary to the base. Place chicken on top of rosemary.",
      "Place roasting pan in oven and roast for 1 + 1/4 hours or until chicken juices run clear when pierced with a fork. {Don’t forget to add bacon-wrapped stuffing balls to roasting pan after 45 minutes of chicken roasting time.}",
      "Remove chicken from pan and rest chicken for 10 minutes, away from heat covered with a heavy tea towel. Discard rosemary.",
      "Place roasting pan onto a medium heat and pour wine into pan. Using a wooden spoon scrape up any baked on bits from the base of the roasting pan and reduce liquid to about 1/3. Add salt and pepper and slowly pour in olive oil whisking as you pour. If you wish strain jus.",
      "Carve chicken with stuffing and serve with jus and stuffing balls. If you wish accompany with roast kumara and silver beet finished with sherry vinegar."
      ],
      steps_audio_path: [
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3"
      ],
      active_audio_path: [
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3"
      ],
      playing: true,
      listening: false
    },
    routing: { locationBeforeTransitions: null }
  }

  freeze(fakeState)

  var expectedState = {
    recipe:{
      id: 1,
      name: "Roast Chicken with Prune and Apricot Stuffing and Pan Jus",
      description: "A succulent Roast Chicken dish",
      notes: "My preference is for corn-fed chickens as they are plump and the meat is moist. Frozen chickens are always handy to have on hand but a fresh chicken will produce crisper skin and juicer meat. To thaw a frozen whole chicken the most efficient method is to place the frozen bird in its plastic wrapping into the sink and run a continuous gentle stream of cold water over it.",
      ingredients: "1.3-1.5kg (1 size 14) chicken@Prune and Apricot Stuffing@3-4 rashers streaky rindless bacon@2 tablespoons olive oil + extra for oiling roasting pan@3-4 small rosemary sprigs@2 cups white wine, chicken stock liquid, a mixture of both, or half of either with cold water. added for volume@½ teaspoon flaky sea salt@1/8 teaspoon freshly ground black pepper@2 tablespoons olive oil",
      cooking_time: "1 hours 30 mins",
      length: 10,
      currentStep:10,
      whole_recipe_audio_path: "../audio/wholeRecipe.mp3",
      ingredients_audio_path: "../audio/ingredients.mp3",
      image_path: "../images/roast-chicken-with-apricot-stuffing_grande.jpeg",
      instructions: [
      "Preheat oven to 180ºC",
      "Remove any giblets and the neck from chicken. With cold water wash inside and outside of chicken and pat dry using paper towels.",
      "Push Prune and Apricot Stuffing into cavity of chicken and secure opening with toothpicks or bamboo skewers. {There will be stuffing remaining so form it into small walnut-sized balls and wrap in bacon to add to roasting pan during the last 30 minutes of the cooking time.}",
      "Fold chicken wings back on themselves to prevent them from flopping out when cooking.",
      "Heat a large heavy based fry pan over a medium heat and add oil. Place chicken, breast side down in fry pan and sear for 1-2 minutes till golden brown. Turn chicken onto its side and continue this process till each side is golden brown.",
      "Lightly oil a roasting pan and add rosemary to the base. Place chicken on top of rosemary.",
      "Place roasting pan in oven and roast for 1 + 1/4 hours or until chicken juices run clear when pierced with a fork. {Don’t forget to add bacon-wrapped stuffing balls to roasting pan after 45 minutes of chicken roasting time.}",
      "Remove chicken from pan and rest chicken for 10 minutes, away from heat covered with a heavy tea towel. Discard rosemary.",
      "Place roasting pan onto a medium heat and pour wine into pan. Using a wooden spoon scrape up any baked on bits from the base of the roasting pan and reduce liquid to about 1/3. Add salt and pepper and slowly pour in olive oil whisking as you pour. If you wish strain jus.",
      "Carve chicken with stuffing and serve with jus and stuffing balls. If you wish accompany with roast kumara and silver beet finished with sherry vinegar."
      ],
      steps_audio_path: [
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3"
      ],
      active_audio_path: [
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3"
      ],
      playing: true,
      listening: false
    },
    routing: { locationBeforeTransitions: null }
  }

  var actualState = reducer(fakeState, action)
  t.deepEqual(actualState, expectedState, 'the reducer does nothing')
  t.end()
})

test('reducer with basic NEXT action returns an array as active_audio_path if active_audio_path is a string in initialState', t=> {

  var action = {
    type: NEXT
  }

  var fakeState = {
    recipe:{
      id: 1,
      name: "Roast Chicken with Prune and Apricot Stuffing and Pan Jus",
      description: "A succulent Roast Chicken dish",
      notes: "My preference is for corn-fed chickens as they are plump and the meat is moist. Frozen chickens are always handy to have on hand but a fresh chicken will produce crisper skin and juicer meat. To thaw a frozen whole chicken the most efficient method is to place the frozen bird in its plastic wrapping into the sink and run a continuous gentle stream of cold water over it.",
      ingredients: "1.3-1.5kg (1 size 14) chicken@Prune and Apricot Stuffing@3-4 rashers streaky rindless bacon@2 tablespoons olive oil + extra for oiling roasting pan@3-4 small rosemary sprigs@2 cups white wine, chicken stock liquid, a mixture of both, or half of either with cold water. added for volume@½ teaspoon flaky sea salt@1/8 teaspoon freshly ground black pepper@2 tablespoons olive oil",
      cooking_time: "1 hours 30 mins",
      length: 10,
      currentStep:0,
      whole_recipe_audio_path: "../audio/wholeRecipe.mp3",
      ingredients_audio_path: "../audio/ingredients.mp3",
      image_path: "../images/roast-chicken-with-apricot-stuffing_grande.jpeg",
      instructions: [
      "Preheat oven to 180ºC",
      "Remove any giblets and the neck from chicken. With cold water wash inside and outside of chicken and pat dry using paper towels.",
      "Push Prune and Apricot Stuffing into cavity of chicken and secure opening with toothpicks or bamboo skewers. {There will be stuffing remaining so form it into small walnut-sized balls and wrap in bacon to add to roasting pan during the last 30 minutes of the cooking time.}",
      "Fold chicken wings back on themselves to prevent them from flopping out when cooking.",
      "Heat a large heavy based fry pan over a medium heat and add oil. Place chicken, breast side down in fry pan and sear for 1-2 minutes till golden brown. Turn chicken onto its side and continue this process till each side is golden brown.",
      "Lightly oil a roasting pan and add rosemary to the base. Place chicken on top of rosemary.",
      "Place roasting pan in oven and roast for 1 + 1/4 hours or until chicken juices run clear when pierced with a fork. {Don’t forget to add bacon-wrapped stuffing balls to roasting pan after 45 minutes of chicken roasting time.}",
      "Remove chicken from pan and rest chicken for 10 minutes, away from heat covered with a heavy tea towel. Discard rosemary.",
      "Place roasting pan onto a medium heat and pour wine into pan. Using a wooden spoon scrape up any baked on bits from the base of the roasting pan and reduce liquid to about 1/3. Add salt and pepper and slowly pour in olive oil whisking as you pour. If you wish strain jus.",
      "Carve chicken with stuffing and serve with jus and stuffing balls. If you wish accompany with roast kumara and silver beet finished with sherry vinegar."
      ],
      steps_audio_path: [
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3"
      ],
      active_audio_path: '../audio/wholeRecipe.mp3',
      playing: true,
      listening: false
    },
    routing: { locationBeforeTransitions: null }
  }

  freeze(fakeState)

  var expectedState = {
    recipe:{
      id: 1,
      name: "Roast Chicken with Prune and Apricot Stuffing and Pan Jus",
      description: "A succulent Roast Chicken dish",
      notes: "My preference is for corn-fed chickens as they are plump and the meat is moist. Frozen chickens are always handy to have on hand but a fresh chicken will produce crisper skin and juicer meat. To thaw a frozen whole chicken the most efficient method is to place the frozen bird in its plastic wrapping into the sink and run a continuous gentle stream of cold water over it.",
      ingredients: "1.3-1.5kg (1 size 14) chicken@Prune and Apricot Stuffing@3-4 rashers streaky rindless bacon@2 tablespoons olive oil + extra for oiling roasting pan@3-4 small rosemary sprigs@2 cups white wine, chicken stock liquid, a mixture of both, or half of either with cold water. added for volume@½ teaspoon flaky sea salt@1/8 teaspoon freshly ground black pepper@2 tablespoons olive oil",
      cooking_time: "1 hours 30 mins",
      length: 10,
      currentStep:1,
      whole_recipe_audio_path: "../audio/wholeRecipe.mp3",
      ingredients_audio_path: "../audio/ingredients.mp3",
      image_path: "../images/roast-chicken-with-apricot-stuffing_grande.jpeg",
      instructions: [
      "Preheat oven to 180ºC",
      "Remove any giblets and the neck from chicken. With cold water wash inside and outside of chicken and pat dry using paper towels.",
      "Push Prune and Apricot Stuffing into cavity of chicken and secure opening with toothpicks or bamboo skewers. {There will be stuffing remaining so form it into small walnut-sized balls and wrap in bacon to add to roasting pan during the last 30 minutes of the cooking time.}",
      "Fold chicken wings back on themselves to prevent them from flopping out when cooking.",
      "Heat a large heavy based fry pan over a medium heat and add oil. Place chicken, breast side down in fry pan and sear for 1-2 minutes till golden brown. Turn chicken onto its side and continue this process till each side is golden brown.",
      "Lightly oil a roasting pan and add rosemary to the base. Place chicken on top of rosemary.",
      "Place roasting pan in oven and roast for 1 + 1/4 hours or until chicken juices run clear when pierced with a fork. {Don’t forget to add bacon-wrapped stuffing balls to roasting pan after 45 minutes of chicken roasting time.}",
      "Remove chicken from pan and rest chicken for 10 minutes, away from heat covered with a heavy tea towel. Discard rosemary.",
      "Place roasting pan onto a medium heat and pour wine into pan. Using a wooden spoon scrape up any baked on bits from the base of the roasting pan and reduce liquid to about 1/3. Add salt and pepper and slowly pour in olive oil whisking as you pour. If you wish strain jus.",
      "Carve chicken with stuffing and serve with jus and stuffing balls. If you wish accompany with roast kumara and silver beet finished with sherry vinegar."
      ],
      steps_audio_path: [
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3"
      ],
      active_audio_path: [
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepOne.mp3",
      "../audio/stepTwo.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3",
      "../audio/stepThree.mp3"
      ],
      playing: true,
      listening: false
    },
    routing: { locationBeforeTransitions: null }
  }

  let actualState = reducer(fakeState, action)
  t.deepEqual(actualState, expectedState, 'the reducer returned changed active_audio_path to an array')
  t.end()
})
