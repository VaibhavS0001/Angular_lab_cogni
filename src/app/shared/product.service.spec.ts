import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import { category, Product } from '../model/product.model';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('http', ['get']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Products', inject(
    [HttpTestingController, ProductService],
    (httpMock: HttpTestingController, service: ProductService) => {
      let p: Product[] = [
        {
          id: 1,
          name: 'shirt',
          price: 500,
          category: category.clothing,
          rating: 4,
          image: '../assets/images/clothes.jpg',
        },
      ];
      service.getProducts().subscribe((products) => {
        expect(p).toEqual(products);
      });
      const mockRequest = httpMock.expectOne('api/products/');
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(p);
      httpMock.verify();
    }
  ));

  it('should create Products', inject(
    [HttpTestingController, ProductService],
    (httpMock: HttpTestingController, service: ProductService) => {
      let p = {
        id: 1,
        name: 'shirt',
        price: 500,
        category: category.clothing,
        rating: 4,
        image: '../assets/images/clothes.jpg',
      };
      service.createProduct(p).subscribe((products) => {
        expect(p).toEqual(products);
      });
      const mockRequest = httpMock.expectOne('api/products/');
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(p);
      httpMock.verify();
    }
  ));

  it('should update Products', inject(
    [HttpTestingController, ProductService],
    (httpMock: HttpTestingController, service: ProductService) => {
      let p = {
        id: 1,
        name: 'shirt',
        price: 500,
        category: category.clothing,
        rating: 4,
        image: '../assets/images/clothes.jpg',
      };
      service.updateProduct(p).subscribe((products) => {
        expect(p).toEqual(products);
      });
      const mockRequest = httpMock.expectOne(`api/products/${p.id}`);
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(p);
      httpMock.verify();
    }
  ));

  it('should delete Products', inject(
    [HttpTestingController, ProductService],
    (httpMock: HttpTestingController, service: ProductService) => {
      let id = 1;
      service.deleteProduct(id).subscribe((products: any) => {
        expect(1).toEqual(products);
      });
      const mockRequest = httpMock.expectOne(`api/products/${id}`);
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(id);
      httpMock.verify();
    }
  ));
});
