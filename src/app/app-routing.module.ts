import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './Day2/animal-list/animal-list.component';
import { ProductlistComponent } from './Day2/productlist/productlist.component';
import { ShoppingCartComponent } from './Day3/shopping-cart/shopping-cart.component';
import { EventsComponent } from './Day4/events/events.component';
import { PageNotFoundComponent } from './Day8/page-not-found/page-not-found.component';
import { StudentDetailsComponent } from './Day8/student-details/student-details.component';
import { StudentListComponent } from './Day8/student-list/student-list.component';
import { StudentsComponent } from './Day8/students/students.component';
import { LoginComponent } from './Day9/login/login.component';
import { PStructureComponent } from './p-structure/p-structure.component';
import { AuthGuardService } from './shared/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'products', component: ProductlistComponent, canActivate: [AuthGuardService] },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'events', component: EventsComponent },
  { path: 'wholeApp', component: PStructureComponent },
  { path: 'student', component: StudentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'animal', component: AnimalListComponent, canActivate: [AuthGuardService] },
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
