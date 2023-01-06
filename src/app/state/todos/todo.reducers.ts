import { createReducer, on } from "@ngrx/store";
import { addTodo, loadTodos, loadTodoFailure, loadTodoSuccess, removeTodo } from "./todo.actions";
import { initialState } from "./todo.state";


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