import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoModel} from '../todo-list/model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: TodoModel;
  id: number;
  user: string;


  constructor(private todoDataService: TodoDataService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.todo = new TodoModel(this.id, '', '', false, new Date());
    if (String(this.id) !== '-1') {
      this.todoDataService.getOneTodo('in28minutes', this.id).subscribe(response => this.todo = response);
    }
  }

  updateOrAddTodo(id: number, todo: TodoModel): void {
    this.user = sessionStorage.getItem('username');
    if (String(this.id) === '-1') {
      this.todoDataService.addTodo(this.user, todo).subscribe(response => {
        this.router.navigate(['todos']);
      });
    } else {
      this.todoDataService.updateTodo(this.user, id, todo).subscribe(response => this.router.navigate(['todos']));
    }
  }
}
