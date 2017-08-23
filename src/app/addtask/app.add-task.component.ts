import { Component } from '@angular/core';
import { Task } from '../shared/interface/task';
import { TaskService } from '../shared/app.shared';
import { CanActivateGuard } from '../shared/app.shared';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-task',
  templateUrl: './app.add-task.component.html'
})

export class AppAddTaskComponent {
  complexForm: FormGroup;
  task: Task;
  pattern = /(\d{4})\.(\d{2})\.(\d{2})/;

  constructor(private taskService: TaskService, fb: FormBuilder, private canActivateGuard: CanActivateGuard,
              private router: Router) {
    this.defaultTask();
    this.complexForm = fb.group({
      'name' : [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      'deadline' : [null, Validators.pattern(this.pattern)],
      'pomodorosRequired': [null, Validators.compose([Validators.required, Validators.min(0), Validators.max(1000)])],
    });
  }

  defaultTask(): void {
    this.task = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: '',
      queued: false,
      pomodorosRequired: 1,
    };
  }

  addTask(task: any) {
    task.deadline = new Date(task.deadline.toString());
    this.taskService.addTask(task).subscribe();
    this.canActivateGuard.validateForm(this.complexForm.valid);
    this.router.navigate(['/tasks']);
  }
}
