import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from 'src/app/state/products/products.effects';
import { productReducer } from 'src/app/state/products/products.reducers';
import { ProductRoutingModule } from './products.routing.module';
import { ProductlistComponent } from '../../common/productlist/productlist.component';
import { SharedModule } from 'src/app/common/common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
})
export class ProductsModule {}
