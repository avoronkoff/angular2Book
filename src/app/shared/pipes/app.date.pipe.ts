import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'datePomodoros'})
export class DatePomodoros implements PipeTransform {
  transform(totalMinutes: number): string {
    const minutes: number = totalMinutes % 60;
    const hours: number = Math.floor (totalMinutes / 60);
    return `${hours}h:${minutes}m`;
  }
}
