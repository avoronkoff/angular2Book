import { Component } from '@angular/core';
import { Task } from '../shared/interface/task';
import { TaskService } from '../shared/app.shared';

@Component({
  selector: 'app-add-task',
  templateUrl: './app.add-task.component.html',
})

export class AppAddTaskComponent{
  task: Task;
  date = new Date().toString();

  constructor(private taskService: TaskService){
    this.defaultTask();
  }

  defaultTask(): void {
    this.task = {
      name: '',
      deadline: new Date(this.date),
      queued: false,
      pomodorosRequired: 0,
    }
  }

  addTask(task: Task): void {
    this.taskService.addTask(task)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
    this.defaultTask();
  }
}
