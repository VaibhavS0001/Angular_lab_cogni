import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { LoggingService } from 'src/app/shared/logging.service';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent implements OnInit {
  @Output() productClicked: EventEmitter<Product> = new EventEmitter();
  sCategory: any;
  title: string = 'Product List';
  msg: string;
  productData: Product[] = [];
  temp2 = this.productData;
  constructor(
    private pService: ProductService,
    private logger: LoggingService
  ) {}
  ngOnInit(): void {
    this.pService.getProducts().subscribe((data) => {
      data.forEach((product) => {
        this.productData.push(product);
      });
    });
  }

  log() {
    this.pService.deleteProduct(1).subscribe(data=>{
      console.log(data)
    })
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

  OnclickRating(msg: string): void {
    this.msg = msg;
  }

  addToShopping(product: Product): void {
    // this._snackBar.open("Product is added go to cart to check it out", "close");
    this.productClicked.emit(product);
  }
}
