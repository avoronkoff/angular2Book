import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppTasksComponent } from './tasks/app.tasks.component';
import { AppTimerComponent } from './timer/app.timer.component';
import { AppAddTaskComponent } from './addtask/app.add-task.component';
import { AppDetailComponent } from './detailtask/app.detail-task.component';

import { CanActivateGuard } from './shared/app.shared';
import { CanDeactivateGuard } from './shared/app.shared';

const routes: Routes = [
  { path: '', redirectTo: '/add-task', pathMatch: 'full' },
  { path: 'tasks',  component: AppTasksComponent, canActivate: [CanActivateGuard] },
  { path: 'timer/:id', component: AppTimerComponent },
  { path: 'add-task', component: AppAddTaskComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'detail/:id', component: AppDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
