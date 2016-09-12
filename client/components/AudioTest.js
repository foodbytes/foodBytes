
function playAudio(props) {
    console.log("I'm in the playAudio", props.data.audio_path[props.data.currentStep - 1])
    let audio = new Audio(props.data.audio_path[props.data.currentStep - 1])
    audio.play()
}

export default playAudio
