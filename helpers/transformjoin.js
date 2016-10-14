const transformJoin = (rows)=> {
   let initialState = {
     id:null,
     name: null,
     description: null,
     notes:null,
     ingredients: null,
     cooking_time: null,
     length: 0,
     whole_recipe_audio_path: null,
     ingredients_audio_path: null,
     recipeList_image_path: null,
     recipePage_image_path: null,
     currentStep:0,
     instructions:[],
     steps_audio_path:[]
   }
   return rows.reduce((prev,row)=>{
     prev.id = row.recipe_id
     prev.name = row.name
     prev.description = row.description
     prev.notes = row.notes
     prev.ingredients = row.ingredients
     prev.cooking_time =row.cooking_time
     prev.length = row.length
     prev.whole_recipe_audio_path = row.whole_recipe_audio_path
     prev.ingredients_audio_path = row.ingredients_audio_path
     prev.recipeList_image_path = row.recipeList_image_path
     prev.recipePage_image_path = row.recipePage_image_path
     prev.currentStep = row.currentStep
     prev.instructions.push(row.instructions)
     prev.steps_audio_path.push(row.steps_audio_path)
     return prev
   },initialState)
}

module.exports = transformJoin
