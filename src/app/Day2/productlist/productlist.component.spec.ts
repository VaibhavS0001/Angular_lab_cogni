import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ProductlistComponent } from './productlist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from 'src/app/shared/product.service';
import { StarComponent } from 'src/app/Day3/star/star.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { category } from 'src/app/product.model';

describe('ProductlistComponent', () => {
  let component: ProductlistComponent;
  let fixture: ComponentFixture<ProductlistComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj(['getProducts']);
    spy.getProducts.and.returnValue(
      new Observable((ob) => {
        ob.next([
          "{'id': 1, 'name': 'shirt', 'price': 500, 'category': '3', 'rating': 4, 'image': '../assets/images/clothes.jpg'",
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
      ],
      declarations: [ProductlistComponent, StarComponent],
      providers: [{ provide: ProductService, useValue: spy }],
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
    // fixture.nativeElement.querySelector('#add').textContent = `{
    //     id: 1,
    //     name: 'Shirt',
    //     price: 500,
    //     category: '3',
    //     rating: 4,
    //     image: '../assets/images/clothes.jpg',
    //   }`;
    component.productClicked.emit({
      id: 1,
      name: 'Shirt',
      price: 500,
      category: category.clothing,
      rating: 4,
      image: '../assets/images/clothes.jpg',
    })
    await fixture.whenStable()
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
});
