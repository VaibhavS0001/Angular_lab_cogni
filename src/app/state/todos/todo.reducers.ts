import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/todo/Day12/todo-page/todo.model";
import { addTodo, loadTodos, loadTodoFailure, loadTodoSuccess, removeTodo } from "./todo.actions";

export interface TodoState{
    todos: Todo[]
    error: string
    status: 'pending' | 'loading' | 'error' | 'success'
}

export const initialState: TodoState = {
    todos: [],
    status: 'pending',
    error: ""
}

export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state,{content})=>({
        ...state,
        todos: [...state.todos, {id: Date.now(), content: content}]
    })),
    
    on(removeTodo, (state,{id})=>({
        ...state,
        todos: state.todos.filter((todo)=>todo.id !== id)
    })),
    
    on(loadTodos, (state)=>({
            ...state,
            status: 'loading'
    })),

    on(loadTodoSuccess, (state, {todos})=>({
        ...state,
        todos,
        error: '',
        status: 'success'
})),

on(loadTodoFailure, (state, {error})=>({
    ...state,
    error: error,
    status: 'error'
})),

    
)