import { Component, HostListener, OnInit } from '@angular/core';
import { Oscillator } from '../models/Oscillator';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  frequency: number = 400
  gain: number = 0.1
  waveform: OscillatorType = 'sine'

  isPlaying: boolean = false

  osc!: Oscillator

  constructor() { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 32) {
      this.isPlaying = !this.isPlaying
    } else {
      return
    }

    if (this.isPlaying) {
      console.log("playing")
      this.osc = new Oscillator(this.frequency, this.gain, this.waveform)
      this.osc.playback()
    } else {
      console.log("not playing")
      this.osc.suspend()
    }
  }

  changeDetect(param: any, e?: any) {

    try {
      switch (param) {
        case this.frequency:
          this.osc.setFreq(this.frequency)
          break;
        case this.gain:
          this.osc.setGain(this.gain)
          break;
        case this.waveform:
          this.osc.setWaveForm(e.target.value)
          break;
        default:
          break;
      }
    } catch (e) {
      console.log("An instance of the oscillator has not yet been initialized. Press Space.")
    }


  }

  // STATIC VALUES
  initOscillator() {
    this.osc = new Oscillator(
      this.frequency,
      this.gain,
      this.waveform)
  }

  ngOnInit(): void {
    // this.initOscillator()
    console.log(this.waveform, this.frequency, this.gain);

  }

}
