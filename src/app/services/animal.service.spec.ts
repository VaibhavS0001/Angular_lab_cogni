import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AnimalService } from './animal.service';

describe('AnimalService', () => {
  let service: AnimalService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['getAnimals']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: spy }],
    });
    service = TestBed.inject(AnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
