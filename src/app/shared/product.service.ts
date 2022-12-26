import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { category, Product } from '../product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('json/products.json');

  }
}
