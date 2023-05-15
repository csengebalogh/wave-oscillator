
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
        if (this.context.state == "suspended") {
            this.context.resume()
        } else {
            this.oscillator.start(now)
        }
        console.log(this.context.state)


    }

    suspend() {
        // this.gain.disconnect(this.context.destination)
        this.context.suspend() 
        console.log(this.context.state);
        
    }
 

}
