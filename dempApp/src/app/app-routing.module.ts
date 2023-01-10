import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardListComponent } from './Day11/card-list/card-list.component';
import { ShoppingCartComponent } from './Day3/shopping-cart/shopping-cart.component';
import { EventsComponent } from './Day4/events/events.component';
import { PageNotFoundComponent } from './Day8/page-not-found/page-not-found.component';
import { StudentDetailsComponent } from './Day8/student-details/student-details.component';
import { StudentListComponent } from './Day8/student-list/student-list.component';
import { StudentsComponent } from './Day8/students/students.component';
import { LoginComponent } from './Day9/login/login.component';
import { PStructureComponent } from './p-structure/p-structure.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'products', loadChildren:() => import('./Day2/products/products.module').then(m => m.ProductsModule) },
  { path: 'animal', loadChildren:() => import('./Day2/animal-list/animal/animal.module').then(m => m.AnimalModule) },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'events', component: EventsComponent },
  { path: 'wholeApp', component: PStructureComponent },
  { path: 'student', component: StudentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'card-list', component: CardListComponent },
  { path: 'todo', loadChildren:() => import('./todo/todo.module').then(m => m.TodoModule) },
  {
    path: 'student-list',
    component: StudentListComponent,
    children: [
      { path: 'student-details/:email', component: StudentDetailsComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}