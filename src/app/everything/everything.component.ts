import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.scss']
})
export class EverythingComponent {
  product: Product
  constructor(){}
  
  getProduct(product: Product){
    this.product = product;
  }
}
