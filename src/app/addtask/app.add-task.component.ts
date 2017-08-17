import { Component } from '@angular/core';
import { Task } from '../shared/interface/task';
import { TaskService } from '../shared/app.shared';

@Component({
  selector: 'app-add-task',
  templateUrl: './app.add-task.component.html',
})

export class AppAddTaskComponent{
  task: Task;
  mask = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(private taskService: TaskService){
    this.defaultTask();
  }

  defaultTask(): void {
    this.task = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: '',
      queued: false,
      pomodorosRequired: 0,
    }
  }

  addTask(task: Task): void {
    let dates = task.deadline.toString().replace(/-/g, ',').split(",").map(item => parseInt(item)).reverse();
    task.deadline = new Date(dates[0], dates[1], dates[2]);

    this.taskService.addTask(task)
      .subscribe(
        error => console.log(error)
      );
    this.defaultTask();
  }
}
