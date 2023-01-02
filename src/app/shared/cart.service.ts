import { Injectable } from '@angular/core';
import { category } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productData: [{
    id: number;
    name: string;
    price: number;
    category: category;
    rating: number;
    image: string;
    quantity: number;
  }];
  constructor() { }

  getProduct(){
    return this.productData
  }

  setProduct(product){
    console.log(product);
    this.productData = product;
  }

}
