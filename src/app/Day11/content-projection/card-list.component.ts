import { Component } from '@angular/core';

@Component({
  selector: 'card-list',
  template: `
    <h1>Card List</h1>

    <card>
      <header #header><h1>This will be Content Child </h1></header>
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
export class CardListComponent {}
