import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ProductlistComponent } from './productlist.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductService } from 'src/app/shared/product.service';
import { StarComponent } from 'src/app/Day3/star/star.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { category } from 'src/app/model/product.model';
import { NavComponent } from 'src/app/Day4/nav/nav.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';

describe('ProductlistComponent', () => {
  let component: ProductlistComponent;
  let fixture: ComponentFixture<ProductlistComponent>;
  let element: HTMLElement;
  let items: any[] = [];
  const spy = jasmine.createSpyObj(['getProducts', 'createProduct']);

  beforeEach(async () => {
    spy.getProducts.and.returnValue(
      new Observable((ob) => {
        ob.next([
          {
            id: 1,
            name: 'shirt',
            price: 500,
            category: category.clothing,
            rating: 4,
            image: '../assets/images/clothes.jpg',
          },
        ]);
        ob.complete();
      })
    );
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatTooltipModule,
        MatDialogModule,
        MatSnackBarModule,
        MatIconModule,
        RouterTestingModule,
      ],
      declarations: [ProductlistComponent, StarComponent, NavComponent],
      providers: [
        { provide: ProductService, useValue: spy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: '24fkzrw3487943uf358lovd' } },
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductlistComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check whether @Output is correctly emitting event object of Product type', async () => {
    spyOn(component.productClicked, 'emit');
    const td = fixture.nativeElement.querySelector('#cart');
    component.productClicked.emit({
      id: 1,
      name: 'Shirt',
      price: 500,
      category: category.clothing,
      rating: 4,
      image: '../assets/images/clothes.jpg',
    });
    await fixture.whenStable();
    td.click();
    fixture.detectChanges();
    expect(component.productClicked.emit).toHaveBeenCalledWith({
      id: 1,
      name: 'Shirt',
      price: 500,
      category: category.clothing,
      rating: 4,
      image: '../assets/images/clothes.jpg',
    });
  });

  it('should initialize the product array', () => {
    fixture.detectChanges();
    expect(component.productData).toEqual([
      {
        id: 1,
        name: 'shirt',
        price: 500,
        category: category.clothing,
        rating: 4,
        image: '../assets/images/clothes.jpg',
      },
    ]);
  });

  it('should add a new Product in the product array', () => {
    let p = {
      id: 2,
      name: 'Peas',
      price: 150,
      category: category.grocery,
      rating: 4.5,
      image: '../assets/images/maggie.webp',
    };
    component.productData.push(p);
    fixture.detectChanges();
    // console.log(component.productData);
    expect(component.productData.length).toBe(2);
  });
});
