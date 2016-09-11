function playAudio() {
    console.log("I'm in the playAudio", __dirname)
    let audio = new Audio('./audio/cheddarCheese.mp3')
    audio.play()
}

export default playAudio