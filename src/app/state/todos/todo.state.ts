import { Todo } from 'src/app/todo/Day12/todo-page/todo.model';
import * as AppState from '../app.state';


export interface todoState extends AppState.State {
    todos: TodoState
}

export interface TodoState{
    todos:Todo[],
    error:string,
    status:'pending'|'loading'|'success'|'error';
   }
   
   export const initialState:TodoState={
     todos:[],
     error:'',
     status:'pending'
   }