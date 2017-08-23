import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'timePomodoros', pure: true})
export class TimePomodoros implements PipeTransform {
  transform(value: number): string {
      return value === 0 ? 'No pomodoros' : (value + ' pomodoros');
  }
}
