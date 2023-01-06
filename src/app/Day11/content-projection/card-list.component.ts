import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'card-list',
  template: `
    <h1>Card List</h1>

    <card>
      <header #header><h1>This will be Content Child</h1></header>
      <p #p>This will be Content Child</p>
    </card>

    <card>
      <header #header><h1 style="color:red;">React</h1></header>
    </card>

    <card>
      <header #header><h1>Typescript</h1></header>
      <p #p>this is a para3</p>
    </card>
  `,
})
export class CardListComponent {
  constructor(private http: HttpClient) {
    const data = this.http.get('/api/products/');
    const subject = new Subject();
    subject.next(
      data.subscribe((s) => {
        console.log('====================================');
        console.log(s);
        console.log('====================================');
      })
    );
    subject.complete()
  }
}
