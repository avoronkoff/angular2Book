import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { Http } from '@angular/http';
import { Observable } from "rxjs";

import 'rxjs/add/operator/map'

@Injectable()
export default class TaskService {
  private tasksUrl = 'api/tasks';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getTasks(): Observable<Task[]> {
    return this.http.get(this.tasksUrl)
      .map(response => response.json().data);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post(this.tasksUrl, JSON.stringify(task), this.headers)
      .map(response => response.json().data)
  }
}

