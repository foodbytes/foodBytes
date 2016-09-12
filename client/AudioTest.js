function PlayAudio() {
    console.log("I'm in the PlayAudio")
    let audio = new Audio('./Audio/cheddarCheese.mp3')
    audio.play()
}

export default PlayAudio