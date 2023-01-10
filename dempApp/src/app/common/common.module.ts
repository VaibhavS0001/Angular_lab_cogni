import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { CommonRoutingModule } from './common.routing.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AnimalListComponent } from './animallist/animal-list.component';



@NgModule({
  declarations: [
    NavComponent,
    ProductlistComponent,
    StarComponent,
    AnimalListComponent
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
    CommonModule,
    CommonRoutingModule,
    FormsModule
  ],
  exports: [NavComponent, ProductlistComponent, StarComponent, AnimalListComponent]
})
export class SharedModule { }