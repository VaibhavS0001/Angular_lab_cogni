import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  name = new FormControl(this.data.product?.name, Validators.required);
  price = new FormControl(this.data.product?.price, Validators.required);
  category = new FormControl(this.data.product?.category, Validators.required);
  rating = new FormControl(this.data.product?.rating, Validators.required);
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {product: Product}
  ) {
  }

  update(){
    let res: Product = {
      id: this.data.product.id,
      name: this.name.value,
      price: this.price.value,
      category: this.category.value,
      rating: this.rating.value,
      image: this.data.product.image
    }
    this.dialogRef.close(res)
  }

  onNoClick(res): void {
    this.dialogRef.close(res);
  }
}
