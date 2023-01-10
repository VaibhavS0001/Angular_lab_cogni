import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title: string = 'Dashboard';
  loginForm!: any;
  users!: User[];
  user!: User;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private lService: LoginService
  ) {}

  login() {
    console.log('====================================');
    console.log(this.loginForm.get('email').value);
    console.log('====================================');
    this.lService.getUsers().subscribe((users) => {
      this.user = users.filter(
        (user) =>
          user.email === this.loginForm.get('email').value &&
          user.password === this.loginForm.get('password').value
      )[0];
      if (this.user) {
        localStorage.setItem('loggedInUser', JSON.stringify(this.user));
        this.router.navigate(['/manager', 'Manager Home']);
      }
    });
  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(10),
        ],
      ],
    });
  }
}
