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
    this.task = {
      name: '',
      deadline: new Date(this.date),
      queued: false,
      pomodorosRequired: 0,
    }
  }
}
