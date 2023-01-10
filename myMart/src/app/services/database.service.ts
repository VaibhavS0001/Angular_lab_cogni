import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InMemoryDbService {

  constructor() { }
  createDb() {
    return {
      users: [
        {
          id: 1,
          email: 'vaib@gmail.com',
          password: 'password11',
          name: 'Vaibhav'
        },
        {
          id: 2,
          email: 'vaib1@gmail.com',
          password: 'password22',
          name: 'John Smith'
        }
      ]
    };
  }
}
