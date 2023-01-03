import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  products: Product[] = [];

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('api/products/');
  }

  createProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Product>('api/products/', product, { headers });
  }
  updateProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Product>(`api/products/${product.id}`, product, {
      headers,
    });
  }

  deleteProduct(id: number) {
    return this.http.delete(`api/products/${id}`);
  }
}
