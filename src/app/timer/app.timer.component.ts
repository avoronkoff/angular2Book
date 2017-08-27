import {Component} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-timer',
  templateUrl: './app.timer.component.html',
  styleUrls: ['./app.timer.component.css'],
  animations: [
    trigger('timerOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(1500, keyframes([
          style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(1500, keyframes([
          style({opacity: 1, transform: 'translateY(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateY(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateY(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
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

      if(--this.seconds < 0) {
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
