import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  product: Product
  pipe: string = 'Vaibhav'
  constructor(){}
  
  getProduct(product: Product){
    this.product = product;
  }
}
