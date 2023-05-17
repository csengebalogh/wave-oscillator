export class Oscillator {

    ctx!:AudioContext
    osc!:OscillatorNode
    gain!:GainNode
    waveform!:string
    
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

    setWaveForm(type:any) {
        this.osc.type = type
    }

    patchNodes() {
        this.osc.connect(this.gain)
        this.gain.connect(this.ctx.destination)
    }

    playback() {
        var now = this.ctx.currentTime

        switch (this.ctx.state) {
            case "suspended":
                this.osc.start(now)
                break;
            case "running": 
                break;
            default:
                break;
        }

    }

    suspend() {
        this.ctx.suspend()
    }
}