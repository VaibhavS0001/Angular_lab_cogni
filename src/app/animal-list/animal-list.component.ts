import { Component } from '@angular/core';

export interface Animal {
  id: number;
  name: string;
  description: string;
  age: number;
  image: string;
}

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent {
  img_height: number = 50;
  img_width: number = 100;
  text = 'hide Image';
  showImg: boolean = true;
  Sname: any;
  ELEMENT_DATA: Animal[] = [
    {
      id: 1,
      name: 'cat',
      description: 'this is  cat',
      age: 20,
      image: '../assets/images/cat.webp',
    },
    {
      id: 2,
      name: 'dog',
      description: 'this is a dog',
      age: 9,
      image: '../assets/images/dog.jpg',
    },
    {
      id: 3,
      name: 'lion',
      description: 'this is  cat',
      age: 10,
      image: '../assets/images/cat.webp',
    },
    {
      id: 4,
      name: 'tiger',
      description: 'this is a dog',
      age: 5,
      image: '../assets/images/dog.jpg',
    },
  ];
  temp2 = this.ELEMENT_DATA;
  show() {
    if (this.text === 'hide Image') {
      this.text = 'show Image';
      this.showImg = false;
    } else {
      this.text = 'hide Image';
      this.showImg = true;
    }
  }
  filter() {
    if (this.Sname == '') {
      this.ELEMENT_DATA = this.temp2;
    }
    let temp: Animal[] = [];
    this.ELEMENT_DATA.forEach((e) => {
      if (e.name.includes(this.Sname)) {
        temp.push(e);
        this.ELEMENT_DATA = temp;
      } else {
        if (!(temp.length > 0)) {
          this.ELEMENT_DATA = this.temp2;
        }
      }
    });
  }
}
