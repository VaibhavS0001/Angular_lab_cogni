import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  empForm: any;
  data: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initEmployeeForm();
  }

  initEmployeeForm() {
    this.empForm = this.fb.group({
      fName: [
        'Vaibhav',
        [Validators.required, Validators.pattern('[A-Z][a-z]*')],
      ],
      lName: [
        'Sharma',
        [Validators.required, Validators.pattern('[A-Z][a-z]*')],
      ],
      email: ['abc@xyz.com', [Validators.required, Validators.email]],
      address: this.fb.group({
        city: ['Delhi', Validators.required],
        state: ['New Delhi', Validators.required],
        country: ['India', Validators.required],
      }),
    });
  }

  isPristine(): boolean {
    return this.empForm.pristine;
  }
  isTouched(): boolean {
    return this.empForm.touched;
  }
  isValid(): boolean {
    return this.empForm.valid;
  }

  Register(): void {
    this.data =
      "Name: " + this.empForm.value.fName + " " + this.empForm.value.lName +
      '\n' +
      "Email: " + this.empForm.value.email +
      '\n' +
      "City: " + this.empForm.value.address.city +
      '\n' +
      "State: " + this.empForm.value.address.state +
      '\n' +
      "Country: " + this.empForm.value.address.country;
    alert(this.data);

    this.empForm.reset();
  }
}
