
// let initialState = {
//     id: 0,
//     name: 'Grilled cheese sandwich',
//     description: 'Indulge in an heavenly melt of cheese grilled in delicious slices',
//     ingredients: 'Two slices of cheddar or swiss cheese,Two slices of white bread,Two tablespoons of butter',
//     cooking_time: '10 mins',
//     length: 0,
//     currentStep:0,
//     instructions:['step one', 'step two', 'step three'],
//     audio_path:['../audio/stepOne.mp3', '../audio/stepTwo.mp3', '../audio/stepThree.mp3']
//   }

 const transformJoin = (seedData)=> {
  //  console.log('WOWOW',seedData);
   let result = {id:null,
   name: null,
   description: null,
   notes:null,
   ingredients: null,
   cooking_time: null,
   length: 0,
   whole_recipe_audio_path: null,
   ingredients_audio_path: null,
   image_path: null,
   currentStep:0,
   instructions:[],
   audio_path:[]}
   return seedData.reduce((prev,row)=>{
     prev.id = row.recipe_id
     prev.name = row.name
     prev.description = row.description
     prev.notes = row.notes
     prev.ingredients = row.ingredients
     prev.cooking_time =row.cooking_time
     prev.length = row.length
     prev.whole_recipe_audio_path = row.whole_recipe_audio_path
     prev.ingredients_audio_path = row.ingredients_audio_path
     prev.image_path = row.image_path
     prev.currentStep = row.currentStep
     prev.instructions.push(row.instructions)
     prev.audio_path.push(row.audio_path)
    //  console.log("YAYAYA",prev);
      return prev

   },result)


}

module.exports = transformJoin
