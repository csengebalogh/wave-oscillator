export class Oscillator {

    ctx!:AudioContext
    osc!:OscillatorNode
    gain!:GainNode
    waveform!:OscillatorType
    
    constructor(freq:number, gain:number, waveform:OscillatorType) {
        //define nodes
        this.ctx = new (window.AudioContext)()
        this.osc = this.ctx.createOscillator()
        this.gain = this.ctx.createGain()
        //set audioparams
        this.setFreq(freq)
        this.setGain(gain)
        this.setWaveForm(waveform)
        //patch nodes
        this.patchNodes()
    }

    setFreq(value:number) {
        this.osc.frequency.value = value
    }

    setGain(value:number) {
        this.gain.gain.value = value
    }

    setWaveForm(type:OscillatorType) {
        this.osc.type = type
    }

    patchNodes() {
        this.osc.connect(this.gain)
        this.gain.connect(this.ctx.destination)
    }

    playback() {
        console.log(this.ctx.state);
        var now = this.ctx.currentTime

        switch (this.ctx.state) {
            case "suspended":
                // this.osc.start(now)
                console.log(this.ctx.state);
                
                break;
            case "running": 
                this.osc.start(now)
                break;
            default:
                break;
        }

    }

    suspend() {
        this.osc.stop(0)
        this.osc.disconnect()
        this.ctx.suspend()
        console.log(this.ctx.state);
        
    }
}