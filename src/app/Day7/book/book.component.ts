import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  bookForm: any;
  data: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initEmployeeForm();
  }

  initEmployeeForm() {
    this.bookForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', [Validators.required, Validators.pattern('[A-Z][a-z]*')]],
      author: this.fb.group({
        name: ['', [Validators.required, Validators.pattern('[A-Z][a-z]*')]],
        email: ['abc@xyz.com', [Validators.required, Validators.email]],
      }),
      dop: ['', Validators.required],
    });
  }

  isPristine(): boolean {
    return this.bookForm.pristine;
  }
  isTouched(): boolean {
    return this.bookForm.touched;
  }
  isValid(): boolean {
    return this.bookForm.valid;
  }

  Register(): void {
    this.data =
      'id: ' +
      this.bookForm.value.id +
      '\n' +
      'Title: ' +
      this.bookForm.value.title +
      '\n' +
      'Name: ' +
      this.bookForm.value.author.name +
      '\n' +
      'Email: ' +
      this.bookForm.value.author.email +
      '\n' +
      'Date Of Publish: ' +
      this.bookForm.value.dop;
    alert(this.data);

    this.bookForm.reset();
  }
}
