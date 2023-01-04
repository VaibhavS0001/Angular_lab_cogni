import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth-service.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['checkAuthStatus']);
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: spy }],
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
