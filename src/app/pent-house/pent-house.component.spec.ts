import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PentHouseComponent } from './pent-house.component';

describe('PentHouseComponent', () => {
  let component: PentHouseComponent;
  let fixture: ComponentFixture<PentHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PentHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PentHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
