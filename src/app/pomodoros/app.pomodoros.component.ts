import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pomodoros-icons',
  templateUrl: './app.pomodoros.component.html',
  styleUrls: ['./app.pomodoros.component.css']
})

export class AppPomodoroIconsComponent {
  @Input() queuedPomodorod: number;
  @Input() countsTomato: Array<number>;
}

