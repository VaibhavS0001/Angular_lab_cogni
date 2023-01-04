import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTab, MatTabGroup, MatTabHeader } from '@angular/material/tabs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PentHouseComponent } from '../Day1/pent-house/pent-house.component';
import { WelcomeComponent } from '../Day1/welcome/welcome.component';
import { AnimalListComponent } from '../Day2/animal-list/animal-list.component';
import { ProductlistComponent } from '../Day2/productlist/productlist.component';
import { ShoppingCartComponent } from '../Day3/shopping-cart/shopping-cart.component';
import { EventsComponent } from '../Day4/events/events.component';
import { NavComponent } from '../Day4/nav/nav.component';
import { RepeatDataPipe } from '../repeat-data.pipe';

import { PStructureComponent } from './p-structure.component';

describe('PStructureComponent', () => {
  let component: PStructureComponent;
  let fixture: ComponentFixture<PStructureComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj(['getProducts']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [
        PStructureComponent,
        MatTab,
        MatTabGroup,
        EventsComponent,
        WelcomeComponent,
        ProductlistComponent,
        ShoppingCartComponent,
        AnimalListComponent,
        PentHouseComponent,
        MatTabHeader,
        NavComponent,
        RepeatDataPipe,
      ],
      providers: [
        MatSnackBar,
        { provide: MatDialog, useValue: spy },
        {
          provide: ActivatedRouteSnapshot,
          useValue: {
            snapshot: {
              paramMap: {
                get(): string {
                  return '123';
                },
              },
            },
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
