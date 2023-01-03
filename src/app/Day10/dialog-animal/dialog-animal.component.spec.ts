import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnimalComponent } from './dialog-animal.component';

describe('DialogAnimalComponent', () => {
  let component: DialogAnimalComponent;
  let fixture: ComponentFixture<DialogAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
