import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppTasksComponent } from './tasks/app.tasks.component';
import { AppTimerComponent } from './timer/app.timer.component';
import { AppAddTaskComponent } from './addtask/app.add-task.component';
import { AppDetailComponent } from './detailtask/app.detail-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks',  component: AppTasksComponent },
  { path: 'timer/:id', component: AppTimerComponent },
  { path: 'add-task', component: AppAddTaskComponent },
  { path: 'detail/:id', component: AppDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
