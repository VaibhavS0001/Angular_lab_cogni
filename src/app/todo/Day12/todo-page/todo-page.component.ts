import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/state/app.state';
import {
  addTodo,
  loadTodos,
  removeTodo,
} from 'src/app/state/todos/todo.actions';
import { featuredS, selectAllTodos } from 'src/app/state/todos/todo.selectors';
import { TodoState, todoState } from 'src/app/state/todos/todo.state';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent {
  todoList!: TodoState;
  public allTodos: Observable<TodoState> = this.store.select(selectAllTodos);

  constructor(private store: Store<todoState>) {}
  ngOnInit() {
    this.store.dispatch(loadTodos());
    this.allTodos.subscribe((resp: TodoState) => {
      this.todoList = resp;
    });
  }

  onSubmit(todoForm: NgForm) {
    this.store.dispatch(addTodo({ content: todoForm.value.todo }));
  }

  remove(id: any) {
    this.store.dispatch(removeTodo({ id }));
  }
}
