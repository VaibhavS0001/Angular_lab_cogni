import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trustee } from 'src/app/model/trustee.model';

@Component({
  selector: 'app-trustee',
  templateUrl: './trustee.component.html',
  styleUrls: ['./trustee.component.scss'],
})
export class TrusteeComponent implements OnInit {
  @ViewChild('trusteeForm', {}) tForm!: NgForm;
  trustee: Trustee;
  constructor() {}
  ngOnInit(): void {
    this.trustee = {
      id: 1,
      name: 'vaibhav sharma',
      gender: 'male',
      country: 'India',
      passport: 'A1234567',
      issueDate: '2022-05-12',
      dependents: 5,
    };
    setTimeout(() => {
      this.tForm.setValue(this.trustee);
      console.log(this.tForm.value);
    }, 2000);
  }
  register(data: any): void {
    alert(
      'Name : ' +
        data.value.name +
        '\n' +
        'Gender : ' +
        data.value.gender +
        '\n' +
        'Country : ' +
        data.value.country +
        '\n' +
        'Passport Number : ' +
        data.value.passport +
        '\n' +
        'IssueDate : ' +
        data.value.issueDate +
        '\n' +
        'Dependents : ' +
        data.value.dependents
    );
    data.reset();
  }
}
