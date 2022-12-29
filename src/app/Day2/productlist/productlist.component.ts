import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { category, Product } from 'src/app/model/product.model';
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
  switch: boolean = false;
  button: string = 'Add Product';
  display = new FormControl('', Validators.required);
  file_store: FileList;
  file_list: Array<string> = [];
  res: any;
  addForm: any;
  error: boolean

  constructor(
    private fb: FormBuilder,
    private pService: ProductService,
    private logger: LoggingService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
    this.pService.getProducts().subscribe((data) => {
      data.forEach((product) => {
        this.productData.push(product);
      });
    });
  }

  initLoginForm() {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      rating: ['', Validators.required],
    });
    // this.addForm.value
  }

  isPristine(): boolean {
    return this.addForm.pristine;
  }
  isTouched(): boolean {
    return this.addForm.touched;
  }
  isValid(): boolean {
    return this.addForm.valid;
  }

  add() {
    this.switch = !this.switch;
    if (this.switch) {
      this.button = 'Show Table';
    } else {
      this.button = 'Add Product';
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  create() {
    if (this.isTouched() && this.isValid()) {
      let cat: category;
      if (this.addForm.value.category == 'clothing') {
        cat = category.clothing;
      } else if (this.addForm.value.category == 'electronics') {
        cat = category.electronics;
      } else if (this.addForm.value.category == 'decor') {
        cat = category.decor;
      } else {
        cat = category.grocery;
      }
      let product: Product = {
        id: this.getRandomInt(1000),
        name: this.addForm.value.name,
        price: parseInt(this.addForm.value.price),
        category: cat,
        rating: parseInt(this.addForm.value.rating),
        image: `assets/images/${this.file_store[0].name}`,
      };
      this.pService.createProduct(product).subscribe((data) => {
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
    }
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
    this.pService.deleteProduct(id).subscribe(() => {
      let fIndex = this.productData.findIndex((item) => item.id == id);
      if (fIndex > -1) {
        this.productData.splice(fIndex, 1);
      }
    });
  }

  updateProduct(products: Product) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { product: products },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      this.pService.updateProduct(result).subscribe(() => {
        let fIndex = this.productData.findIndex((item) => item.id == result.id);
        if (fIndex > -1) {
          this.productData[fIndex] = result;
        }
      });
    });
  }

  OnclickRating(msg: string): void {
    this.msg = msg;
  }

  addToShopping(product: Product): void {
    this.productClicked.emit(product);
  }

  handleFileInputChange(l: FileList): void {
    this.file_store = l;
    if (l.length) {
      const f = l[0];
      const count = l.length > 1 ? `(+${l.length - 1} files)` : '';
      this.display.patchValue(`${f.name}${count}`);
    } else {
      this.display.patchValue('');
    }
  }
}
