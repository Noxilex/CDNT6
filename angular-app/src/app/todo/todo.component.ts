import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Task[]>('http://localhost:3000/tasks')
      .pipe(map( tasks => tasks ))
      .subscribe(
        (tasks: Task[]) => {
          this.tasks = tasks;
        }
      );
  }

}
