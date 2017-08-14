import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs";

@Injectable()
export default class TaskService {
  private tasksUrl = 'api/tasks';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getTasks(): Observable<Task[]> {
    return this.http.get(this.tasksUrl)
      .map(response => response.json().data)
      .catch(this.handleError.bind(this));
  }

  private handleError (error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

