import { Component } from '@angular/core';
import { Task } from '../shared/interface/task';
import { TaskService } from '../shared/app.shared';
import { ActiveGuard } from '../shared/service/app.guard.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './app.add-task.component.html'
})

export class AppAddTaskComponent {
  complexForm : FormGroup;
  task: Task;

  constructor(private taskService: TaskService, fb: FormBuilder, private activeGuard :ActiveGuard) {
    this.defaultTask();
    this.complexForm = fb.group({
      'name' : [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      'deadline' : [null, Validators.required],
      'pomodorosRequired': [null, Validators.compose([Validators.required, Validators.min(0), Validators.max(1000)])],
    })
  }

  defaultTask(): void {
    this.task = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: '',
      queued: false,
      pomodorosRequired: 1,
    };
  }

  addTask(task: any){
    task.deadline = new Date(task.deadline.format('YYYY.MM.DD'));
    this.taskService.addTask(task).subscribe();
    this.activeGuard.validateForm(this.complexForm.valid);
    this.complexForm.reset();
  }
}
