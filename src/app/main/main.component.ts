import { Component, HostListener, OnInit } from '@angular/core';
import { Oscillator } from '../models/Oscillator';

const TOGGLE_BUTTON:HTMLElement | null  = document.getElementById('startBtn')

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  frequency:number = 400
  gain:number = 0.1

  isPlaying:boolean = false

  osc!:Oscillator

  constructor() { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) { 
    if (event.keyCode === 32) {
      this.isPlaying = !this.isPlaying
    }

    if (this.isPlaying) {
      console.log("playing")
      this.osc.playback()
    } else {
      console.log("not playing")
      this.osc.suspend()
    }
  }

  changeDetect(param:number) {
    switch (param) {
      case this.frequency:
          this.osc.setFreq(this.frequency)
        break;
      case this.gain:
          this.osc.setGain(this.gain)
          break;
      default:
        break;
    }

  }

  // STATIC VALUES
  createInitialContext() {
    this.osc = new Oscillator(
      this.frequency, 
      this.gain, 
      'sine')
  }

  ngOnInit(): void {
    this.createInitialContext()
  }

}
