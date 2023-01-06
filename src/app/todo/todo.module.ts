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
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { DataService } from '../shared/data.service';



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
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule, 
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    // HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  exports: [],
  providers: [],
  bootstrap: [TodoPageComponent],
  schemas: [],
})
export class TodoModule { }
