import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatepickerModule } from 'angular2-material-datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './main/app.component';
import { AppCountdownComponent } from './countdown/app.countdown.component';
import { ApppNavbarComponent } from './navbar/app.navbar.component';
import { AppTimerComponent } from './timer/app.timer.component';
import { AppTasksComponent } from './tasks/app.tasks.component';
import { AppPomodoroIconsComponent } from './pomodoros/app.pomodoros.component';
import { AppAddTaskComponent } from './addtask/app.add-task.component';
import { AppDetailComponent } from './detailtask/app.detail-task.component';
import { AppSigninComponent } from './signin/app.signin.component';

import { TaskService } from './shared/app.shared';
import { TimePomodoros } from './shared/app.shared';
import { DatePomodoros } from './shared/app.shared';
import { AuthenticationService } from './shared/app.shared';

import { AppRoutingModule } from './app-routing.module';
import { CanActivateGuard } from './shared/app.shared';
import { CanDeactivateGuard } from './shared/app.shared';

@NgModule({
  declarations: [
    AppComponent,
    AppCountdownComponent,
    ApppNavbarComponent,
    AppTimerComponent,
    AppTasksComponent,
    AppPomodoroIconsComponent,
    AppAddTaskComponent,
    AppDetailComponent,
    TimePomodoros,
    DatePomodoros,
    AppSigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    ReactiveFormsModule,
    DatepickerModule,
    BrowserAnimationsModule
  ],
  providers: [TaskService, CanActivateGuard, CanDeactivateGuard, AuthenticationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
