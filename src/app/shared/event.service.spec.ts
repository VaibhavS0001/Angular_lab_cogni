import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['getProducts']);
    TestBed.configureTestingModule({
      providers: [EventService, { provide: HttpClient, useValue: spy }],
    });
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
