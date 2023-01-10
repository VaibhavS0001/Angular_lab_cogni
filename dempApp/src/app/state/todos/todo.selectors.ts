import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState, todoState } from './todo.state';

export const selectTodos = (state: todoState) => state.todos

export const featuredS = createSelector(
  selectTodos,
  (state: TodoState) => state.todos
);

export const selectAllTodos: any = createFeatureSelector('todos')
