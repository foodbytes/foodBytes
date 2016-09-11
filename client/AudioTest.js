function playAudio() {
    console.log("I'm in the playAudio")
    let audio = new Audio('./Audio/cheddarCheese.mp3')
    audio.play()
}

export default playAudio