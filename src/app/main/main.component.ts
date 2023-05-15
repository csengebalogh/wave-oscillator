import { Component, HostListener, OnInit } from '@angular/core';
import {CustomAudioContext} from '../models/CustomAudioContext'

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

  context!:CustomAudioContext

  constructor() { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) { 
    if (event.keyCode === 32) {
      this.isPlaying = !this.isPlaying
    }

    if (this.isPlaying) {
      console.log("playing")
      this.context.playback()
    } else {
      console.log("not playing")
      this.context.suspend()
    }
  }

  // STATIC VALUES
  createInitialContext() {
    this.context = new CustomAudioContext(
      400, 
      0.2, 
      'sine')
  }

  ngOnInit(): void {
    this.createInitialContext()
  }

}
