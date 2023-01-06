import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { TodoService } from 'src/app/todo/Day12/todo.service';
import { loadTodos, loadTodoFailure, loadTodoSuccess } from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTodos),
      mergeMap(() =>
        this.todoService.getTodos().pipe(
          map(
            (todos) => loadTodoSuccess({ todos }),
            catchError((error) => of(loadTodoFailure({ error })))
          )
        )
      )
    );
  });
}
