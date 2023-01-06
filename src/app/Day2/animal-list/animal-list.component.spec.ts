import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { AnimalService } from 'src/app/services/animal.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { AnimalListComponent } from './animal-list.component';

describe('AnimalListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj([
      'checkRole',
      'checkAuthStatus',
      'getAnimals',
    ]);
    spy.getAnimals.and.returnValue(
      new Observable((ob) => {
        ob.next(`[{
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
      }]`);
      })
    );
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        FormsModule,
        MatDialogModule,
        MatSnackBarModule,
        MatIconModule,
        RouterTestingModule,
      ],
      declarations: [AnimalListComponent],
      providers: [
        { provide: AnimalService, useValue: spy },
        { provide: AuthService, useValue: spy },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
