import { Component } from '@angular/core';

enum category {
  clothing = 'clothing',
  grocery = 'grocery',
  decor = 'decor',
  phones = 'phones',
}

export interface Product {
  id: number;
  name: string;
  price: string;
  category: category;
  image: string;
}

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent {
  sCategory: any;
  productData: Product[] = [
    {
      id: 1,
      name: 'Shirt',
      price: '500',
      category: category.clothing,
      image: '../assets/images/clothes.jpg',
    },
    {
      id: 2,
      name: 'grocery2',
      price: '300',
      category: category.grocery,
      image: '../assets/images/maggie.webp',
    },
    {
      id: 3,
      name: 'Jeans',
      price: '1500',
      category: category.clothing,
      image: '../assets/images/clothes.jpg',
    },
    {
      id: 4,
      name: 'antique1',
      price: '3500',
      category: category.decor,
      image: '../assets/images/decor.webp',
    },
    {
      id: 5,
      name: 'T-Shirt',
      price: '2500',
      category: category.clothing,
      image: '../assets/images/clothes.jpg',
    },
    {
      id: 6,
      name: 'antique2',
      price: '7500',
      category: category.decor,
      image: '../assets/images/decor.webp',
    },
    {
      id: 7,
      name: 'grocery1',
      price: '100',
      category: category.grocery,
      image: '../assets/images/maggie.webp',
    },
    {
      id: 8,
      name: 'phone1',
      price: '20000',
      category: category.phones,
      image: '../assets/images/phone.jpg',
    },
  ];
  temp2 = this.productData;
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
}
