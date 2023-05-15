export class CustomAudioContext {

    context!:AudioContext
    oscillator!:OscillatorNode
    gain!:GainNode

    constructor(frequency:number, gain:number, waveform:OscillatorType) {

        this.context = new (window.AudioContext)()
        this.oscillator = this.context.createOscillator()
        this.gain = this.context.createGain()

        this.oscillator.type = waveform
        this.oscillator.frequency.value = frequency
        this.gain.gain.value = gain
    }

    playback() {
        this.oscillator.connect(this.gain)
        this.gain.connect(this.context.destination)

        var now = this.context.currentTime
        this.oscillator.start(now)

        // this.oscillator.stop(now + 2)
    }

    resume() {
        this.gain.disconnect(this.context.destination)
    }


}
