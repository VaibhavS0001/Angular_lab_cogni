import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { Product } from 'src/app/model/product.model';
import { LoggingService } from 'src/app/shared/logging.service';
import { ProductService } from 'src/app/shared/product.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth-service.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent implements OnInit {
  @Output() productClicked: EventEmitter<Product> = new EventEmitter();
  sCategory: any;
  // selected = 'user';
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
  sub!: Subscription;
  obProduct!: Observable<Product[]>;

  constructor(
    private pService: ProductService,
    private logger: LoggingService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private authService: AuthService,
    private route: Router
  ) {}

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
    // this.pService.getProducts().subscribe((data) => {
    //   data.forEach((product) => {
    //     this.productData.push(product);
    //   });
    // });
    //Other Way to get products
    this.obProduct = this.pService.getProducts();
    this.obProduct.forEach((product) => {
      this.productData = product;
    });
  }

  add() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { button: 'Add Product' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        for (let product of this.productData) {
          if (result.id == product.id) {
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
          this.pService.createProduct(result).subscribe((data) => {
            console.log(data);
            this.productData.push(data);
            this.snackBar.open(
              'New Product is created successfully with id ' + data.id,
              'close',
              {
                duration: 2000,
                // panelClass: ['blue-snackbar']
              }
            );
          });
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

  deleteProduct(id: number) {
    if (confirm(`Are you sure you want to delete this product`)) {
      this.pService.deleteProduct(id).subscribe(() => {
        let fIndex = this.productData.findIndex((item) => item.id == id);
        if (fIndex > -1) {
          this.productData.splice(fIndex, 1);
          this.snackBar.open(
            `Product with id ${id} is deleted successfully.`,
            'close',
            {
              duration: 2000,
              // panelClass: ['blue-snackbar']
            }
          );
        }
      });
    }
  }

  updateProduct(products: Product) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { product: products, button: 'update' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log('The dialog was closed', result);
      if (result) {
        this.pService.updateProduct(result).subscribe(() => {
          let fIndex = this.productData.findIndex(
            (item) => item.id == result.id
          );
          if (fIndex > -1) {
            this.productData[fIndex] = result;
          }
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
}
