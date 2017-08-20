import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/';

import 'rxjs/add/operator/map';

@Injectable()
export default class TaskService {
  private tasksUrl = 'api/tasks';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getTasks(): Observable<Task[]> {
    return this.http.get(this.tasksUrl)
      .map(response => response.json().data);
  }

  addTask(task: any): Observable<Task> {
    return this.http.post(this.tasksUrl, JSON.stringify(task), this.headers)
      .map(response => response.json().data);
  }

  deleteTask(id: number): Observable<Task[]> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete(url, this.headers)
      .map((response) => response.json());
  }


  getTask(id: number): Observable<Task> {
    return this.http.get(this.tasksUrl)
      .map(response => response.json().data.find(task => task.id === id));
  }
}

