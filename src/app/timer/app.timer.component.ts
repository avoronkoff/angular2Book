import {Component} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './app.timer.component.html'
})

export class AppTimerComponent {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;

  constructor(){
    this.timerReset();
    setInterval(() => this.tick(), 1000);
  }

  onCountDownComplete(): void {
    console.log('tie up!');
  }

  timerReset(): void {
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'start';
    this.togglePause();
  }

  tick(): void {
    if(!this.isPaused){
      this.buttonLabel = 'pause';

      if(--this.seconds < 0){
        this.seconds = 59;
        if(--this.minutes < 0){
          this.timerReset();
        }
      }
    }
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;

    if(this.minutes < 24 || this.seconds < 59){
      this.buttonLabel = this.isPaused ? 'resume' : 'pause';
    }
  }
}
