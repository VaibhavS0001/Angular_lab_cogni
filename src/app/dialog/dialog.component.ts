import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { category, Product } from '../model/product.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  addProduct: any;
  updateProduct: any;
  file_store: FileList;
  file_list: Array<string> = [];

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product; button: string }
  ) {}

  ngOnInit(): void {
    if(this.data.product){
      this.initUpdateForm()
    }else{
      this.initAddForm()
    }
  }

  initAddForm() {
    this.addProduct = this.fb.group({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      display: new FormControl('', Validators.required),
    });
  }

  initUpdateForm() {
    this.updateProduct = this.fb.group({
      name: new FormControl(this.data.product?.name, Validators.required),
      price: new FormControl(this.data.product?.price, Validators.required),
      category: new FormControl(
        this.data.product?.category,
        Validators.required
      ),
      rating: new FormControl(this.data.product?.rating, Validators.required),
      display: new FormControl(this.data.product?.image, Validators.required),
    });
  }

  update() {
    if (this.updateProduct.get('display').touched) {
      let res: Product = {
        id: this.data.product.id,
        name: this.updateProduct.get('name').value,
        price: this.updateProduct.get('price').value,
        category: this.updateProduct.get('category').value,
        rating: this.updateProduct.get('rating').value,
        image: `assets/images/${this.file_store[0].name}`,
      };
      this.dialogRef.close(res);
    } else {
      let res: Product = {
        id: this.data.product.id,
        name: this.updateProduct.get('name').value,
        price: this.updateProduct.get('price').value,
        category: this.updateProduct.get('category').value,
        rating: this.updateProduct.get('rating').value,
        image: this.data.product.image,
      };
      this.dialogRef.close(res);
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  add() {
    let cat: category;
    if (this.addProduct.get('category').value == 'clothing') {
      cat = category.clothing;
    } else if (this.addProduct.get('category').value == 'electronics') {
      cat = category.electronics;
    } else if (this.addProduct.get('category').value == 'decor') {
      cat = category.decor;
    } else {
      cat = category.grocery;
    }
    let product: Product = {
      id: this.getRandomInt(10000),
      name: this.addProduct.get('name').value,
      price: this.addProduct.get('price').value,
      category: cat,
      rating: this.addProduct.get('rating').value,
      image: `assets/images/${this.file_store[0].name}`,
    };
    this.dialogRef.close(product);
  }

  onNoClick(res: boolean): void {
    this.dialogRef.close(res);
  }

  handleFileInputChange(l: FileList): void {
    if(this.data.button === 'Add Product' ){
      this.file_store = l;
      if (l.length) {
        const f = l[0];
        const count = l.length > 1 ? `(+${l.length - 1} files)` : '';
        this.addProduct.get('display').patchValue(`${f.name}${count}`);
      } else {
        this.addProduct.get('display').patchValue('');
      }
    }else{
      this.file_store = l;
      if (l.length) {
        const f = l[0];
        const count = l.length > 1 ? `(+${l.length - 1} files)` : '';
        this.updateProduct.get('display').patchValue(`${f.name}${count}`);
      } else {
        this.updateProduct.get('display').patchValue('');
      }
    }
  }
}
