import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';

import { Task } from './../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks: Task[];

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.tasksService.getTasks().subscribe(
      tasks => this.tasks = tasks
    );
  }

}
