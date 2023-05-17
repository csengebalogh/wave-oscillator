
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
        var now = this.context.currentTime

        this.oscillator.connect(this.gain)
        this.gain.connect(this.context.destination)
        this.oscillator.start(now)

        switch (this.context.state) {
            case "suspended":
                this.context.resume()
                break;
            case "running": 
                console.log("running")
                break;
            default:
                break;
        }

    }

    suspend() {
        // this.gain.disconnect(this.context.destination)
        this.context.suspend() 
        console.log(this.context.state);
        
    }
 

}
