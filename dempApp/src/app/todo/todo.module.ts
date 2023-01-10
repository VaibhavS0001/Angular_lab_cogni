import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './Day12/todo-page/todo-page.component';
import { FormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo.routing.module';
import { SharedModule } from '../common/common.module';
import { TodoEffects } from '../state/todos/todo.effects';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from '../state/todos/todo.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    SharedModule,
    StoreModule.forFeature('todos', todoReducer),
    EffectsModule.forFeature(TodoEffects),
    MaterialModule
  ],
  exports: [],
  providers: [],
  bootstrap: [TodoPageComponent],
  schemas: [],
})
export class TodoModule { }
