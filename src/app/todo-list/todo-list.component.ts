import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {TodoModel} from './model/todo.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: [TodoModel];
  message: string;
  todo: TodoModel;

  constructor(private todoDataService: TodoDataService, private router: Router) {
  }

  ngOnInit(): void {
    this.refreshTodos();
  }


  refreshTodos(): void {
    this.todoDataService.getAllTodo('in28minutes').subscribe(response => this.todoList = response);
  }

  deleteToDo(username: string, id: number): void {
    this.todoDataService.deleteTodo(username, id).subscribe(response => {
        this.message = response.description + ' Deleted';
        this.refreshTodos();
      }
    );
  }


  updateToDo(todo: TodoModel): void {
    this.router.navigate(['todos', todo.id]);
  }

  addTodo(): void {
    this.router.navigate(['todos', -1]);
  }
}
