import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './Day2/productlist/productlist.component';
import { ShoppingCartComponent } from './Day3/shopping-cart/shopping-cart.component';
import { EventsComponent } from './Day4/events/events.component';
import { EverythingComponent } from './everything/everything.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'products', component: ProductlistComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'events', component: EventsComponent },
  { path: '', component: EverythingComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
