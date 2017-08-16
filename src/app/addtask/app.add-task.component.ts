import { Component } from '@angular/core';
import { Task } from '../shared/interface/task';
import { TaskService } from '../shared/app.shared';

@Component({
  selector: 'app-add-task',
  templateUrl: './app.add-task.component.html',
})

export class AppAddTaskComponent{
  task: Task;

  constructor(private taskService: TaskService){
    this.defaultTask();
  }

  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }

  defaultTask(): void {
    this.task = {
      id: this.newGuid(),
      name: '',
      deadline: new Date('Jun 23 2015'),
      queued: false,
      pomodorosRequired: 0,
    }
  }

  addTask(task: Task): void {
    console.log(task);
    this.taskService.addTask(task)
      .subscribe(
        error => console.log(error)
      );
    this.defaultTask();
  }
}
