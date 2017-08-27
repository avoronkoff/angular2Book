import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppTasksComponent } from './tasks/app.tasks.component';
import { AppTimerComponent } from './timer/app.timer.component';
import { AppAddTaskComponent } from './addtask/app.add-task.component';
import { AppDetailComponent } from './detailtask/app.detail-task.component';
import { AppSigninComponent } from './signin/app.signin.component';

// import { CanActivateGuard } from './shared/app.shared';
// import { CanDeactivateGuard } from './shared/app.shared';

const routes: Routes = [
  { path: 'tasks',  component: AppTasksComponent }, // canActivate: [CanActivateGuard]
  { path: 'timer/:id', component: AppTimerComponent },
  { path: 'add-task', component: AppAddTaskComponent },
  { path: 'detail/:id', component: AppDetailComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: AppSigninComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
