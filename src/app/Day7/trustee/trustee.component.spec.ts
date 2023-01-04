import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { TrusteeComponent } from './trustee.component';

describe('TrusteeComponent', () => {
  let component: TrusteeComponent;
  let fixture: ComponentFixture<TrusteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrusteeComponent, MatDivider, ],
      imports: [ MatCardModule, FormsModule, MatInputModule, MatSelectModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrusteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
