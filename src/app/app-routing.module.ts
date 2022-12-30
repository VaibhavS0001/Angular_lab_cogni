import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './Day2/productlist/productlist.component';
import { ShoppingCartComponent } from './Day3/shopping-cart/shopping-cart.component';
import { EventsComponent } from './Day4/events/events.component';
import { PageNotFoundComponent } from './Day8/page-not-found/page-not-found.component';
import { StudentDetailsComponent } from './Day8/student-details/student-details.component';
import { StudentListComponent } from './Day8/student-list/student-list.component';
import { StudentsComponent } from './Day8/students/students.component';
import { PStructureComponent } from './p-structure/p-structure.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'products', component: ProductlistComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'events', component: EventsComponent },
  { path: '', component: PStructureComponent },
  { path: 'student', component: StudentsComponent },
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
