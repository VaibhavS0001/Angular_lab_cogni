import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { Product } from 'src/app/model/product.model';
import { LoggingService } from 'src/app/services/logging.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { Store } from '@ngrx/store';
import { ProductState } from 'src/app/state/products/product.state';
import { getProducts } from 'src/app/state/products/products.selectors';
import * as ProductActions from '../../state/products/products.actions';
import { state, style, trigger } from '@angular/animations';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
  animations: [
    trigger('enlarge', [
      state(
        'end',
        style({
          transform: 'scale(1.5)',
          'box-shadow': '0 0 10px rgba(0, 0, 0, 0.5)',
        })
      ),
    ]),
  ],
})
export class ProductlistComponent implements OnInit {
  @Output() productClicked: EventEmitter<Product> = new EventEmitter();
  sCategory: any;
  title: string = 'Product List';
  msg!: string;
  productData: Product[] = [];
  temp2 = this.productData;
  switch: boolean = false;
  button: string = 'Add Product';
  c: number = 0;
  res: any;
  error!: boolean;
  isAuthenticated: boolean = false;
  role!: string;
  links: Array<string> = [];
  isHoveringState: Array<string> = [];

  constructor(
    private logger: LoggingService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private authService: AuthService,
    private route: Router,
    private store: Store<ProductState>
  ) {}
  pList!: ProductState;
  public allProducts: Observable<Product[]> = this.store.select(getProducts);

  ngOnInit(): void {
    this.role = this.authService.checkRole();
    // console.log(this.role)
    this.isAuthenticated = this.authService.checkAuthStatus();
    if (!this.isAuthenticated) {
      this.links.push('animal');
      this.links.push('login');
    } else {
      this.links.push('animal');
      this.links.push('Logout');
    }
    this.store.dispatch(ProductActions.loadProducts());
    this.allProducts.subscribe((resp: Product[]) => {
      this.productData = resp;
    });
    for (let i = 0; i < this.productData.length; i++) {
      this.isHoveringState[i] = 'end';
    }
    // console.log(this.role)
    // this.isAuthenticated = this.authService.checkAuthStatus();
    // this.pService.getProducts().subscribe((data) => {
    //   data.forEach((product) => {
    //     this.productData.push(product);
    //   });
    // });
    //Other Way to get products
    // this.obProduct = this.pService.getProducts();
    // this.obProduct.forEach((product) => {
    //   this.productData = product;
    // });
  }

  add() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { button: 'Add Product' },
    });

    dialogRef.afterClosed().subscribe((product: Product) => {
      if (product) {
        for (let products of this.productData) {
          if (product.id == products.id) {
            this.c -= 1;
          } else {
            this.c += 1;
          }
        }
        if (this.c == this.productData.length - 2) {
          this.snackBar.open(
            'Something went wrong your product is not added yet please try again',
            'close',
            {
              duration: 2000,
              // panelClass: ['blue-snackbar']
            }
          );
          this.add();
          this.c = 0;
        }
        if (this.c == this.productData.length) {
          // this.pService.createProduct(result).subscribe((data) => {
          //   console.log(data);
          //   this.productData.push(data);
          //
          // });
          this.store.dispatch(ProductActions.createProduct({ product }));
          this.snackBar.open(
            'New Product is created successfully with id ' + product.id,
            'close',
            {
              duration: 2000,
              // panelClass: ['blue-snackbar']
            }
          );
          this.c = 0;
        }
      } else {
        this.snackBar.open("Couldn't create new Product", 'close', {
          duration: 2000,
          // panelClass: ['blue-snackbar']
        });
      }
    });
  }

  log() {
    this.logger.log('this is a normal log');
    this.logger.warnlog('this is a warn log');
    this.logger.errorlog('this is a error log');
  }

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

  deleteProduct(productId: number) {
    if (confirm(`Are you sure you want to delete this product`)) {
      this.store.dispatch(ProductActions.deleteProduct({ productId }));
      // this.pService.deleteProduct(id).subscribe(() => {
      //   let fIndex = this.productData.findIndex((item) => item.id == id);
      //   if (fIndex > -1) {
      //     this.productData.splice(fIndex, 1);
      //     this.snackBar.open(
      //       `Product with id ${id} is deleted successfully.`,
      //       'close',
      //       {
      //         duration: 2000,
      //         // panelClass: ['blue-snackbar']
      //       }
      //     );
      //   }
      // });
    }
  }

  updateProduct(products: Product) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { product: products, button: 'update' },
    });

    dialogRef.afterClosed().subscribe((product: Product) => {
      // console.log('The dialog was closed', result);
      if (product) {
        // this.pService.updateProduct(result).subscribe(() => {
        //   let fIndex = this.productData.findIndex(
        //     (item) => item.id == result.id
        //   );
        //   if (fIndex > -1) {
        //     this.productData[fIndex] = result;
        //   }
        // });
        this.store.dispatch(ProductActions.updateProduct({ product }));
        this.snackBar.open('Product Updated Successfully', 'close', {
          duration: 2000,
          // panelClass: ['blue-snackbar']
        });
      } else {
        this.snackBar.open('Operation was canceled', 'close', {
          duration: 2000,
          // panelClass: ['blue-snackbar']
        });
      }
    });
  }

  OnclickRating(msg: string): void {
    this.msg = msg;
  }

  addToShopping(product: any): void {
    this.productClicked.emit(product);
    this.route.navigate(['cart'], { queryParams: product });
  }

  changeHover(index: number): void {
    this.isHoveringState[index] =
      this.isHoveringState[index] === 'end' ? 'void' : 'end';
  }
}
