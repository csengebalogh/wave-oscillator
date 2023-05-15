import { Component, HostListener, OnInit } from '@angular/core';
import {CustomAudioContext} from '../models/CustomAudioContext'

const TOGGLE_BUTTON:HTMLElement | null  = document.getElementById('startBtn')

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  frequency!:number
  gain!:number

  isPlaying:boolean = false

  context!:CustomAudioContext

  constructor() { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) { 
    if (event.keyCode === 32) {
      this.isPlaying = !this.isPlaying
    }

    console.log(this.isPlaying );
    if (this.isPlaying && TOGGLE_BUTTON != null) {
      TOGGLE_BUTTON.innerHTML = 'f'
    }



  }

  // STATIC VALUES
  createContext() {
    this.context = new CustomAudioContext(
      400, 
      0.1, 
      'sine')
  }

  playback() {
    this.context.playback()
  }
 
  ngOnInit(): void {
    this.createContext()
  }

}
