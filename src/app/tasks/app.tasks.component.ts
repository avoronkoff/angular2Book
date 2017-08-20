import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/interface/task';
import { TaskService } from '../shared/app.shared';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './app.tasks.component.html'
})

export class AppTasksComponent implements OnInit{
  today: Date;
  tasks: Task[];
  countsTomato: Array<number>;
  queuedPomodorod: number;

  constructor(private taskService: TaskService,
              private router: Router) {
    this.today = new Date();
    this.queuedPomodorod = 0;
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  goToTimer(id: number): void {
    this.router.navigate([`/timer/${id}`]);
  }

  deleteTask(i): void {
    this.taskService.deleteTask(i)
      .subscribe(
        () => this.tasks.splice(i, 1)
      );
  }

  toggleTask(task: Task): void {
    task.queued = !task.queued;
    this.updateQueuedPomodoros();
  }

  updateQueuedPomodoros(): void {
    this.queuedPomodorod = this.tasks
      .filter(task => task.queued)
      .reduce((pomodoros: number, queuedTask: Task) => {
        return pomodoros + queuedTask.pomodorosRequired;
      }, 0);
    this.tomatoIcons();
  }

  tomatoIcons(): void {
    this.countsTomato = Array.apply(null, new Array(this.queuedPomodorod)).fill(0).map((i, item) => i + item);
  }

  ngOnInit(): void {
    this.getTasks();
  }
}
