import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth-service.service';

describe('AuthServiceService', () => {
  let service: AuthService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['getUsers']);
    TestBed.configureTestingModule({
      providers: [AuthService, { provide: HttpClient, useValue: spy }],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
