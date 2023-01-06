import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard.service';
import { ProductlistComponent } from '../../common/productlist/productlist.component';

const productRoutes: Routes = [
  { path: '', component: ProductlistComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
