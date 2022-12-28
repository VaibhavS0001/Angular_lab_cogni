import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('MatDialogRef', ['close']);
    const spy1 = jasmine.createSpyObj('name', ['']);

    await TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      providers: [{ provide: MatDialogRef, useValue: {spy} }, {provide: MAT_DIALOG_DATA, useValue: 'spy1'}],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should check name', () => {
  //   let ele = fixture.nativeElement;
  //   const name = ele.querySelector('#name')
  //   component.name = name
  //   fixture.detectChanges()
  // });
});
