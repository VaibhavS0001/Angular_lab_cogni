import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerHomeComponent } from './manager-home/manager-home.component';

const mRoutes: Routes = [
  {path: '', component: ManagerHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(mRoutes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
