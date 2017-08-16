import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from '../shared/app.shared';
import { Task } from '../shared/interface/task';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail-task',
  templateUrl: './app.detail-task.component.html'
})

export class AppDetailComponent implements OnInit {
  task: Task;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.taskService.getTask(+params.get('id')))
      .subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }
}
