import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TodoModel} from '../../todo-list/model/todo.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TodoDataService {

  constructor(private http: HttpClient) {
  }

  getAllTodo(username: string): Observable<[TodoModel]> {
    return this.http.get<[TodoModel]>(`http://localhost:8080/users/${username}/todos/`);
  }

  deleteTodo(username: string, id: number): Observable<TodoModel> {
    return this.http.delete<TodoModel>(`http://localhost:8080/users/${username}/todos/${id}/`);
  }

  getOneTodo(username: string, id: number): Observable<TodoModel> {
    return this.http.get<TodoModel>(`http://localhost:8080/users/${username}/todos/${id}/`);
  }

  updateTodo(username: string, id: number, todo: TodoModel): Observable<TodoModel> {
    return this.http.put<TodoModel>(`http://localhost:8080/users/${username}/todos/${id}/`, todo);
  }

  addTodo(username: string, todo: TodoModel): Observable<TodoModel> {
    return this.http.post<TodoModel>(`http://localhost:8080/users/${username}/todos/`, todo);
  }
}
