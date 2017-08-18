import { Component } from '@angular/core';
import { Task } from '../shared/interface/task';
import { TaskService } from '../shared/app.shared';

@Component({
  selector: 'app-add-task',
  templateUrl: './app.add-task.component.html',
  styleUrls: ['./app.add-task.component.css']
})

export class AppAddTaskComponent {
  task: Task;
  // mask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  mask = /(\d{4})\.(\d{2})\.(\d{4})/;
  pattern = /(\d{2})\.(\d{2})\.(\d{4})/;

  constructor(private taskService: TaskService) {
    this.defaultTask();
  }

  defaultTask(): void {
    this.task = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: '',
      queued: false,
      pomodorosRequired: 1,
    };
  }

  addTask(task: Task): void {
    task.deadline = new Date(task.deadline.toString()
      .replace(this.pattern, '$3-$2-$1'));

    this.taskService.addTask(task)
      .subscribe(
        error => console.log(error)
      );
    this.defaultTask();
  }
}
