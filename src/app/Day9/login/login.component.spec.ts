import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async () => {
    const spy = jasmine.createSpyObj(['getUsers']);
    spy.getUsers.and.returnValue(
      new Observable((ob) => {
        ob.next(`[
        {
          name: 'Vaibhav',
          email: 'vaib@gmail.com',
          password: 'pass@1',
          role: 'user',
        },
        {
          name: 'Vaibhav Sharma',
          email: 'vaibhav@gmail.com',
          password: 'password',
          role: 'admin',
        }
      ]`);
      })
    );
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [{ provide: AuthService, useValue: spy }, FormBuilder],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if the form is valid or not filling input fields', () => {
    component.loginForm.controls['email'].setValue('abc@gmail.com')
    component.loginForm.controls['password'].setValue('1234abcd')
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should check if the form is submitted', () => {
    expect(component.loginForm.valid).toBeFalsy();
    let lBtn = fixture.debugElement.query(By.css('#login-btn'));
    expect(lBtn.nativeElement.disabled).toBeTruthy();
    component.loginForm.controls['email'].setValue('abc@gmail.com')
    component.loginForm.controls['password'].setValue('1234abcd')
    fixture.detectChanges()
    expect(lBtn.nativeElement.disabled).toBeFalsy()
  })

});
