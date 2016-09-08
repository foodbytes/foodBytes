module.exports = function speechRecogntion() {
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

  var grammar = '#JSGF V1.0; grammar commands; public <commands> = next | repeat | previous | ingredients | define | recipe'
  //Define a new instance of speechRecognition to control the recognition for our application.
  //This is done using the SpeechRecognition() constructor. We also create a new speech grammar list to
  //contain our grammar using the SpeechGrammarList() constructor.
  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();

  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;

  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;



  var diagnostic = document.querySelector('.output');
  var bg = document.querySelector('html');

  document.body.onclick = function() {
    recognition.start();
    console.log('Ready to receive a command.');
  }

  var audioArray = [
   document.getElementById('stepOne')
   // document.getElementById('stepTwo'),
   // document.getElementById('stepThree')
  ]

  var index = -1

  recognition.onresult = function(event) {
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
