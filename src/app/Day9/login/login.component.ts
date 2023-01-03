import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // @Output() role: EventEmitter<string> = new EventEmitter();
  loginForm: FormGroup;
  isAuthenticated: boolean = false;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.auth.getUsers().subscribe((users) => {
      for (let user of users) {
        if (
          user.email === this.loginForm.get('email').value &&
          user.password === this.loginForm.get('password').value
        ) {
          if (this.auth.redirectToUrl) {
            this.auth.changeAuthStatus();
            this.auth.changeRole(user.role);
            this.route.navigateByUrl(this.auth.redirectToUrl);
          } else {
            this.auth.changeAuthStatus();
            this.auth.changeRole(user.role);
            this.route.navigate(['products']);
          }
          // this.role.emit(user.role);
          break;
        } else {
          this.isAuthenticated = false;
          console.log('Incorrect email or password');
        }
      }
    });
  }
}
