import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, from, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { TodoService } from 'src/app/todo/Day12/todo.service';
import {
  loadTodos,
  loadTodoFailure,
  loadTodoSuccess,
  addTodo,
  removeTodo,
} from './todo.actions';
import { selectAllTodos } from './todo.selectors';
import { TodoState } from './todo.state';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private store:Store<TodoState>, private todoService: TodoService) {}

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

  saveTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addTodo),
        withLatestFrom(this.store.select(selectAllTodos)),
        switchMap(([action, todos]) => from(this.todoService.createTodo(todos)))
      ),
    { dispatch: false }
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeTodo),
      concatMap((action) => this.todoService.deleteTodo(action))
    ),
    {dispatch: false}
  );
  
}
