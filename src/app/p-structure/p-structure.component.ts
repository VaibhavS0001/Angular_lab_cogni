import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-p-structure',
  templateUrl: './p-structure.component.html',
  styleUrls: ['./p-structure.component.scss'],
})
export class PStructureComponent {
  product: Product;
  constructor() {}

  getProduct(product: Product) {
    this.product = product;
  }
}
