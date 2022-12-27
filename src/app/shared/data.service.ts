import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { category } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      events: [
        {
          id: 1,
          name: 'Event 1',
          date: '2022-05-01',
          time: '7:00pm',
          price: 1400,
          imageURL: '../assets/images/event.jpg',
          location: {
            address: 'TSM',
            city: 'Delhi',
            country: 'India',
          },
          sessions: [
            {
              id: 101,
              name: 'Session 1',
              presenter: 'Presenter 1',
              duration: '30 minutes',
              level: '1',
              voter: ['voter 1', 'voter 2', 'voter 3', 'voter 4'],
            },
            {
              id: 112,
              name: 'some random Session',
              presenter: 'Presenter 2',
              duration: '45 minutes',
              level: '4',
              voter: ['voter 1', 'voter 2', 'voter 3', 'voter 4'],
            },
          ],
        },
        {
          id: 2,
          name: 'Event 2',
          date: '2022-05-10',
          time: '5:00pm',
          price: 1000,
          imageURL: '../assets/images/event.jpg',
          location: {
            address: 'TSM1',
            city: 'Delhi',
            country: 'India',
          },
          sessions: [
            {
              id: 102,
              name: 'some random Session',
              presenter: 'Presenter 2',
              duration: '45 minutes',
              level: '4',
              voter: ['voter 1', 'voter 2', 'voter 3', 'voter 4'],
            },
            {
              id: 142,
              name: 'some random Session',
              presenter: 'Presenter 2',
              duration: '45 minutes',
              level: '4',
              voter: ['voter 11', 'voter 12', 'voter 31', 'voter 41'],
            },
          ],
        },
        {
          id: 3,
          name: 'Event 3',
          date: '2022-12-01',
          time: '12:00pm',
          price: 100,
          imageURL: '../assets/images/event.jpg',
          location: {
            address: 'TS1',
            city: 'Delhi',
            country: 'India',
          },
          sessions: [
            {
              id: 172,
              name: 'some random Session',
              presenter: 'Presenter 2',
              duration: '45 minutes',
              level: '4',
              voter: ['voter 10', 'voter 22', 'voter 33', 'voter 44'],
            },
          ],
        },
      ],
      products: [
        {
          id: 1,
          name: 'Shirt',
          price: 500,
          category: category.clothing,
          rating: 4,
          image: '../assets/images/clothes.jpg',
        },
        {
          id: 2,
          name: 'grocery2',
          price: 300,
          category: category.grocery,
          rating: 2,
          image: '../assets/images/maggie.webp',
        },
        {
          id: 3,
          name: 'Jeans',
          price: 1500,
          category: category.clothing,
          rating: 3,
          image: '../assets/images/clothes.jpg',
        },
        {
          id: 4,
          name: 'antique1',
          price: 3500,
          category: category.decor,
          rating: 4.5,
          image: '../assets/images/decor.webp',
        },
        {
          id: 5,
          name: 'T-Shirt',
          price: 2500,
          category: category.clothing,
          rating: 3.5,
          image: '../assets/images/clothes.jpg',
        },
        {
          id: 6,
          name: 'antique2',
          price: 7500,
          category: category.decor,
          rating: 3,
          image: '../assets/images/decor.webp',
        },
        {
          id: 7,
          name: 'Watch',
          price: 25000,
          category: category.electronics,
          rating: 3.5,
          image: '../assets/images/smartwatch.webp',
        },
        {
          id: 8,
          name: 'grocery1',
          price: 100,
          category: category.grocery,
          rating: 5,
          image: '../assets/images/maggie.webp',
        },
        {
          id: 9,
          name: 'phone1',
          price: 20000,
          category: category.electronics,
          rating: 4.5,
          image: '../assets/images/phone.jpg',
        },
      ],
    };
  }
}
