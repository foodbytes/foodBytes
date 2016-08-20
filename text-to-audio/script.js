 function playAudio (evt) {
 //
  if (evt.target.speechRecognitionResult.contains('repeat')) {
    var commandOne = document.getElementById('repeat-sound')
    commandOne.volume = 0.5
    commandOne.play()
  } else {
    // You can only mark cells that are hidden!
    if (evt.target.speechRecognitionResult.contains('next')) {
      // If the cell wasn't marked, play the mark sound and add a mark!
      var markSound = document.getElementById('next-sound')
      commandTwo.volume = 0.5
      commandTwo.play()
    }
  }

 //The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
