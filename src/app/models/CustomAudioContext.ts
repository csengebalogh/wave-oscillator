export class CustomAudioContext {

    context!:AudioContext

    oscillator!:OscillatorNode
    gain!:GainNode

    frequencyValue!:number
    gainValue!:number
    waveform!:OscillatorType

    constructor(frequency:number, gain:number, waveform:OscillatorType) {
        this.frequencyValue = frequency
        this.gainValue = gain
        this.waveform = waveform

        this.createContext()
        
    }

    playback() {
        var now = this.context.currentTime

        this.oscillator.type = this.waveform
        this.oscillator.frequency.value = this.frequencyValue
        this.gain.gain.value = this.gainValue

        this.oscillator.connect(this.gain)
        this.gain.connect(this.context.destination)

        this.oscillator.start(now)
        this.oscillator.stop(now + 2)
    }

    createContext() {
        this.context = new (window.AudioContext)()
        this.oscillator = this.context.createOscillator()
        this.gain = this.context.createGain()
    }

}
