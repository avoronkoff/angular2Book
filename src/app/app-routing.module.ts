import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppTasksComponent} from './tasks/app.tasks.component';
import {AppTimerComponent} from './timer/app.timer.component';
import { AppAddTaskComponent } from './addTask/app.add-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks',  component: AppTasksComponent },
  { path: 'timer', component: AppTimerComponent },
  { path: 'add-task', component: AppAddTaskComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
