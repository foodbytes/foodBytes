module.exports = function speechRecogntion(props) {
  let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  let SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
  let SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

  let grammar = '#JSGF V1.0; grammar commands; public <commands> = next | repeat | previous | ingredients | define | recipe'
  //Define a new instance of speechRecognition to control the recognition for our application.
  //This is done using the SpeechRecognition() constructor. We also create a new speech grammar list to
  //contain our grammar using the SpeechGrammarList() constructor.
  let recognition = new SpeechRecognition();
  let speechRecognitionList = new SpeechGrammarList();

  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;

  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  console.log('speechRecognition');

  let diagnostic = document.querySelector('.output');
  let bg = document.querySelector('html');

  document.body.onclick = function() {
    recognition.start();
    console.log('Ready to receive a command.');
  }

  let audioArray = [
   document.getElementById('stepOne')
   // document.getElementById('stepTwo'),
   // document.getElementById('stepThree')
  ]

  let index = -1

  recognition.onresult = function(event) {

    var command = event.results[0][0].transcript;
    switch (command) {
       case "next":
         if (audioArray[index+1]) {
           index++
           audioArray[index].play()
       };
         break;
       default:
         console.log("Your command was invalid!", false);
     }
    console.log('result here', event.results);
  // diagnostic.textContent = 'Result received: ' + command + '.';
    console.log('result here', event.results[0][0].transcript);
  }

  recognition.onspeechend = function() {
    recognition.stop();
  }

  recognition.onnomatch = function(event) {
    diagnostic.textContent = 'I didnt recognise that.';
  }

  recognition.onerror = function(event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
  }

}
