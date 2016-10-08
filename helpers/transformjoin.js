const transformJoin = (seedData)=> {
   let result = {id:null,
   name: null,
   description: null,
   notes:null,
   cooking_time: null,
   ingredients: null,
   length: 0,
   whole_recipe_audio_path: null,
   ingredients_audio_path: null,
   recipeList_image_path: null,
   recipePage_image_path: null,
   instructions:[],
   steps_audio_path:[]
 }
 
 return seedData.reduce((prev,row)=>{
     prev.id = row.id
     prev.name = row.name
     prev.description = row.description
     prev.notes = row.notes
     prev.cooking_time =row.cooking_time
     prev.ingredients = row.ingredients
     prev.length = row.length
     prev.whole_recipe_audio_path = row.whole_recipe_audio_path
     prev.ingredients_audio_path = row.ingredients_audio_path
     prev.recipeList_image_path = row.recipeList_image_path
     prev.recipePage_image_path = row.recipePage_image_path
     prev.instructions.push(row.instructions)
     prev.steps_audio_path.push(row.steps_audio_path)
      return prev

   },result)

}

module.exports = transformJoin
