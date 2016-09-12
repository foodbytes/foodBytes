gitimport {NEXT, REPEAT, PREVIOUS, WHOLE_RECIPE, INGREDIENTS} from './actions/actionCreators'

module.exports = function speechRecogntion(props) {
  let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  let SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
  let SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

  //grammar currently might not be doing anything, these commands should come from the state.
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

  // // parent file
  // const listener = ( runThis ) => {
  //    document.getElementById('.startButton').addEventListener('click', (ev)=> { runThis() })
  // }

  // props.listener(recognition.start)

  // document.querySelector(props.classToListenTo).addEventListener('click', () => {
  //   recognition.start();
  //   console.log('Ready to receive a command.');
  // })


  document.body.onclick = function() {
    let { listening } = props.data
    recognition.start();
    props.listeningDispatch(props.data.listening)
    console.log('Ready to receive a command.');
  }

  recognition.onresult = function(event) {

    let { audio_path } = props.data

    var command = event.results[0][0].transcript;
    switch (command) {
       case NEXT:
       case 'cc next':
       case "cc's next":
       case 'see sea next':
       case 'sea sea next':
       case 'si si next':
       case 'dc next':
         props.nextDispatch(props.data.audio_path)
         break;

       case PREVIOUS:
       case 'cc previous':
       case "cc's previous":
       case 'see sea previous':
       case 'sea sea previous':
       case 'si si previous':
       case 'dc previous':
         props.previousDispatch(props.data.audio_path)
         break;

       case REPEAT:
       case 'cc repeat':
       case "cc's repeat":
       case 'see sea repeat':
       case 'sea sea repeat':
       case 'si si repeat':
       case 'dc repeat':
         props.repeatDispatch(props.data.audio_path)
         break;

       case WHOLE_RECIPE:
       case 'cc whole recipe':
       case "cc's whole recipe":
       case 'see sea whole recipe':
       case 'sea sea recipe':
       case 'si si recipe':
       case 'dc recipe':
         props.wholeRecipeDispatch(props.data.audio_path)
         break;

       case INGREDIENTS:
       case 'cc ingredients':
       case "cc's ingredients":
       case 'see sea ingredients':
       case 'sea sea ingredients':
       case 'si si ingredients':
       case 'dc ingredients':
         props.ingredientsDispatch(props.data.audio_path)
         break;

       default:
         console.log("Your command was invalid!", false);
     }
    console.log('result here', command);
  }

  recognition.onspeechend = function() {
    let { listening } = props.data
    recognition.stop();
    props.listeningDispatch(props.data.listening)
  }

  recognition.onnomatch = function(event) {
    diagnostic.textContent = 'I didnt recognise that.';
  }

  recognition.onerror = function(event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
  }

}
