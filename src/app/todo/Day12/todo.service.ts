import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { TodoState } from 'src/app/state/todos/todo.state';
import { Todo } from './todo-page/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public url = '/api/todos/';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url).pipe(
      tap((data) => {
        console.log('====================================');
        console.log(JSON.stringify(data));
        console.log('====================================');
      }),
      catchError(this.errorHandler)
    );
  }

  createTodo(todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http.post<Todo>(this.url, todo, { headers }).pipe(
      tap((data) => {
        console.log('====================================');
        console.log(data);
        console.log('====================================');
      }),
      catchError(this.errorHandler)
    );
  }

  deleteTodo(todoId: any): Observable<{}> {
    return this.http.delete<Todo>(`api/products/${todoId.id}`).pipe(
      tap((data) => {
        console.log('====================================');
        console.log(`Task with id: ${todoId.id} deleted successfully`);
        console.log('====================================');
      }),
      catchError(this.errorHandler)
    );
  }

  private errorHandler(err: any) {
    let errMessage: string;
    if (err.error instanceof ErrorEvent) {
      errMessage = `An error ocuured ${err.error.message}`;
    } else {
      errMessage = `Backend returned code ${err.status}`;
    }
    console.log('====================================');
    console.log(err);
    console.log('====================================');
    return throwError(errMessage);
  }
}
