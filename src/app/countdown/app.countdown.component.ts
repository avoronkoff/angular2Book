import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './app.countdown.component.html',
  styleUrls: ['./app.countdown.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class AppCountdownComponent {
  @Input() seconds: number;
  intervalId: any;
  @Output() complete: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }
  private tick(): void {
    if (--this.seconds < 1) {
      clearInterval(this.intervalId);
      this.complete.emit(null);
    }
  }
}
