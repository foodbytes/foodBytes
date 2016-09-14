**FOOD BYTES**

FoodBytes is an interactive audio cook book. The application provides online recipe support, meaning the user can focus on cooking and keep food well away from their electronic device.

Food Bytes reads the recipe back to the user and is prompted to play audio files through programmed commands. The commands currently available through Food Bytes are: Next, Previous and Repeat. Food Bytes maintains the users position in the recipe - and only plays back the specific audio file (mp3) for the step in the recipe the user is currently on.

A detailed project planning overview including user stories, scamps and learning objectives can be found in the planning repository: https://github.com/foodbytes/Planning

**SCREENSHOTS**

(need to update)

**HOW TO INSTALL**

git clone https://github.com/foodbytes/foodBytes.git
cd
npm install
npm run watch
npm run dev
browse to http://localhost:3000/

**BUILT BY**

Mandy Baker: https://github.com/mandy-kate
Martin Butts: https://github.com/martybutts
Ahmed Shaaban: https://github.com/AhmedShab
Amaan Rao: https://github.com/amaanvaddadi
James Boyer: https://github.com/JamesAnBo

**TECHNOLOGY USED**

The application has been built using React-Redux and a Postgres database backend for information relating to each recipe. It's been built with scalability in mind. There is a path to the audio files in the database but the MP3 files themselves are stored in the public folder of this repo. The app uses a speech recognition script: Annyang and is built using mobile first design.

**APP LINK**

Food Bytes is automatically deployed to heroku here: https://audioeats.herokuapp.com/

**TESTS**

npm test (will run all the tests: server, integration, and reducer tests)
npm run server-test
npm run integration-test
npm run reducer-test

