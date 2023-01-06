import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { CommonRoutingModule } from './common.routing.module';



@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    CommonModule,
    CommonRoutingModule
  ],
  exports: [NavComponent]
})
export class SharedModule { }
