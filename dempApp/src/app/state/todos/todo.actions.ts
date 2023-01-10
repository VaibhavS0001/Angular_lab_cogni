import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/todo/Day12/todo-page/todo.model";

export const addTodo = createAction(
    '[Todo Page] Add Todo',
    props<{content: string}>()
)

export const removeTodo = createAction(
    '[Todo Page] Remove Todo',
    props<{id: number}>()
)

export const loadTodos = createAction('[Todo Page] Load Todos')

export const loadTodoSuccess = createAction('[Todo Page] Load Todo Success',
props<{todos: Todo[]}>()
)

export const loadTodoFailure = createAction('[Todo Page] Load Todo Failure',
props<{error: string}>()
)