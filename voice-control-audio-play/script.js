var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

//var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var grammar = '#JSGF V1.0; grammar commands; public <commands> = next | repeat'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
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
 document.getElementById('next-sound'),
 document.getElementById('repeat-sound')
]

var index = -1

recognition.onresult = function(event) {
  var command = event.results[0][0].transcript;
  switch (command) {
      case "next":
        if (audioArray[index+1]) {
          index++
          audioArray[index].play()
      };
        console.log(index)
        break;
      case "repeat":
        if (audioArray[index]) {
        audioArray[index].play()
      };
        break;
      default:
        console.log("Your command was invalid!", false);
    }
  diagnostic.textContent = 'Result received: ' + command + '.';
  console.log('result here', event.results[0][0].transcript);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = 'I didnt recognise that color.';
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}


