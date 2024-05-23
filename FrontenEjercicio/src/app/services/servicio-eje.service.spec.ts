import { TestBed } from '@angular/core/testing';

import { ServicioEjeService } from './servicio-eje.service';

describe('ServicioEjeService', () => {
  let service: ServicioEjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
