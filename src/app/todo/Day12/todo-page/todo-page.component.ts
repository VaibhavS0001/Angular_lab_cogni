import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { loadTodos } from 'src/app/state/todos/todo.actions';
import { featuredS, selectAllTodos } from 'src/app/state/todos/todo.selectors';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent {
  todoList!: any; 
  state: any
  constructor(private store: Store<AppState>) {
    // this.state = store.select(featuredS);
  }
  public allTodos: any = this.store.select(featuredS)

  onSubmit(todoForm:NgForm){
    console.log('====================================');
    
    // this.allTodos.subscribe(todo =>{
    //  this.todoList = todo
    // });
    console.log('====================================');
    console.log(todoForm.value);
   }

   ngOnInit(){
    console.log('====================================');
    console.log("ngOnInit");
    console.log('====================================');
    this.store.dispatch(loadTodos())
    this.allTodos.subscribe((resp: any) =>{
      this.todoList = resp
    })
   }

}
