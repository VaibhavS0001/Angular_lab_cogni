import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/cart.service';
import { category, Product } from '../../model/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnChanges, OnInit {
  title: string = 'Shopping Cart';
  productData!: Array<{
    id: number;
    name: string;
    price: any;
    category: category;
    rating: any;
    image: string;
    quantity: number;
  }>;
  msg!: string;
  cart!: Product;
  total: number = 0;
  c = 0
  cP: any = {};

  @Input() cartProduct!: Product;

  OnclickRating(msg: string): void {
    this.msg = msg;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // let obj: {
    //   id: number;
    //   name: string;
    //   price: number;
    //   category: category;
    //   rating: number;
    //   image: string;
    //   quantity: number;
    // };
    // let count = 0;
    // if (this.cartProduct != undefined && this.productData != undefined) {
    //   for (let i = 0; i < this.productData.length; i++) {
    //     if (this.productData[i].id == this.cartProduct.id) {
    //       this.snackBar.open(
    //         'this product has already been added to cart',
    //         'close',
    //         {
    //           duration: 2000,
    //           // panelClass: ['blue-snackbar']
    //         }
    //       );
    //       count++;
    //     }
    //   }
    //   if (count == 0) {
    //     this.snackBar.open(
    //       'Product is added go to cart to check it out',
    //       'close',
    //       {
    //         duration: 2000,
    //         // panelClass: ['blue-snackbar']
    //       }
    //     );
    //     this.productData.push({ ...this.cartProduct, quantity: 1 });
    //   }

    //   if(this.c == 1){
    //     this.c = 0
    //     this.productData.shift()
    //   }

    //   this.productData.forEach((product) => {
    //     this.total += product.price;
    //   });
    // }else{
    //     this.c = this.c + 1
    //     this.productData = [{ ...this.cartProduct, quantity: 1 }];
    // }
  }
  constructor(private snackBar: MatSnackBar, private aRoute: ActivatedRoute, private cService: CartService) {}
  ngOnInit(): void {
    this.productData = this.cService.getProduct()
    // console.log(this.productData)
    this.aRoute.queryParamMap.subscribe((params) => {
      let cat: category;
      if (params.get('category') == 'clothing') {
        cat = category.clothing;
      } else if (params.get('category') == 'electronics') {
        cat = category.electronics;
      } else if (params.get('category') == 'decor') {
        cat = category.decor;
      } else {
        cat = category.grocery;
      }
      this.cP.id = params.get('id');
      this.cP.name = params.get('name');
      this.cP.price = params.get('price');
      this.cP.category = cat;
      this.cP.rating = params.get('rating');
      this.cP.image = params.get('image');
      // console.log(this.cP)
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
      if (this.cP != undefined && this.productData != undefined) {
        for (let i = 0; i < this.productData.length; i++) {
          if (this.productData[i].id == this.cP.id) {
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
          this.productData.push({ ...this.cP, quantity: 1 });
        }

        if (this.c == 1) {
          this.c = 0;
          this.productData.shift();
        }

        this.productData.forEach((product) => {
          this.total += product.price;
        });
      } else {
        this.c = this.c + 1;
        this.productData = [{ ...this.cP, quantity: 1 }];
      }
    });
    this.cService.setProduct(this.productData)
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
      } else if (product.id == id && product.quantity == 1) {
        this.productData.splice(i, 1);
      }
    });

    this.productData.forEach((product) => {
      sum += product.price;
    });

    this.total = sum;
  }
}
