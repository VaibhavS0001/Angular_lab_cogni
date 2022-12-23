import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { category, Product } from 'src/app/product.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent {
  @Output() productClicked: EventEmitter<Product> = new EventEmitter();
  sCategory: any;
  title: string = 'Product List'
  msg: string
  productData: Product[] = [
    {
      id: 1,
      name: 'Shirt',
      price: 500,
      category: category.clothing,
      rating: 4,
      image: '../assets/images/clothes.jpg',
    },
    {
      id: 2,
      name: 'grocery2',
      price: 300,
      category: category.grocery,
      rating: 2,
      image: '../assets/images/maggie.webp',
    },
    {
      id: 3,
      name: 'Jeans',
      price: 1500,
      category: category.clothing,
      rating: 3,
      image: '../assets/images/clothes.jpg',
    },
    {
      id: 4,
      name: 'antique1',
      price: 3500,
      category: category.decor,
      rating: 4.5,
      image: '../assets/images/decor.webp',
    },
    {
      id: 5,
      name: 'T-Shirt',
      price: 2500,
      category: category.clothing,
      rating: 3.5,
      image: '../assets/images/clothes.jpg',
    },
    {
      id: 6,
      name: 'antique2',
      price: 7500,
      category: category.decor,
      rating: 3,
      image: '../assets/images/decor.webp',
    },
    {
      id: 7,
      name: 'Watch',
      price: 25000,
      category: category.electronics,
      rating: 3.5,
      image: '../assets/images/smartwatch.webp',
    },
    {
      id: 8,
      name: 'grocery1',
      price: 100,
      category: category.grocery,
      rating: 5,
      image: '../assets/images/maggie.webp',
    },
    {
      id: 9,
      name: 'phone1',
      price: 20000,
      category: category.electronics,
      rating: 4.5,
      image: '../assets/images/phone.jpg',
    },
  ];
  temp2 = this.productData;
  constructor(private _snackBar: MatSnackBar) {}
  filter() {
    if (this.sCategory == '') {
      this.productData = this.temp2;
    }
    let temp: Product[] = [];
    this.productData.forEach((e) => {
      if (e.category.includes(this.sCategory)) {
        temp.push(e);
        this.productData = temp;
      } else {
        if (!(temp.length > 0)) {
          this.productData = this.temp2;
        }
      }
    });
  }

  OnclickRating(msg: string): void{
    this.msg = msg
  }

  addToShopping(product: Product): void{
    // this._snackBar.open("Product is added go to cart to check it out", "close");
    this.productClicked.emit(product);
  }

}
