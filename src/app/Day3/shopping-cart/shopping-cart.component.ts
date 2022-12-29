import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { category, Product } from '../../model/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnChanges, OnInit {
  title: string = 'Shopping Cart';
  productData: [
    {
      id: number;
      name: string;
      price: number;
      category: category;
      rating: number;
      image: string;
      quantity: number;
    }
  ] = [
    {
      id: 10,
      name: 'watch2',
      price: 12000,
      category: category.electronics,
      rating: 3.5,
      image: '../assets/images/smartwatch.webp',
      quantity: 1,
    },
  ];
  msg: string;
  cart: Product;
  total: number = 0;
  // @Input() cartProduct: Product;

  @Input() cartProduct: Product;

  OnclickRating(msg: string): void {
    this.msg = msg;
  }

  ngOnChanges(changes: SimpleChanges): void {
    let obj: {
      id: number;
      name: string;
      price: number;
      category: category;
      rating: number;
      image: string;
      quantity: number;
    };
    let count = 0;
    if (this.cartProduct != undefined) {
      for (let i = 0; i < this.productData.length; i++) {
        if (this.productData[i].id == this.cartProduct.id) {
          this.snackBar.open(
            'this product has already been added to cart',
            'close',
            {
              duration: 2000,
              // panelClass: ['blue-snackbar']
            }
          );
          count++;
        }
      }
      if (count == 0) {
        this.snackBar.open(
          'Product is added go to cart to check it out',
          'close',
          {
            duration: 2000,
            // panelClass: ['blue-snackbar']
          }
        );
        this.productData.push({ ...this.cartProduct, quantity: 1 });
      }

      this.productData.forEach((product) => {
        this.total += product.price;
      });
    }
  }
  constructor(private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.productData.forEach((product) => {
      this.total += product.price;
    });
  }

  add(id: number) {
    let sum = 0;
    this.productData.forEach((product) => {
      if (product.id == id) {
        let ac = product.price / product.quantity;
        product.quantity += 1;
        ac *= product.quantity;
        product.price = ac;
      }
      sum += product.price;
    });

    this.total = sum;
  }

  remove(id: number) {
    let sum = 0;
    this.productData.forEach((product, i) => {
      if (product.id == id && product.quantity > 1) {
        let ac = product.price / product.quantity;
        product.quantity -= 1;
        ac *= product.quantity;
        product.price = ac;
      }else if(product.id == id && product.quantity == 1){
        this.productData.splice(i,1)
      }
    });

    this.productData.forEach(product =>{
      sum += product.price;
    })

    this.total = sum;
  }
}
