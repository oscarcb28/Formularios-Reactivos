import { TestBed } from '@angular/core/testing';

import { CargarCoordenadasService } from './cargar-coordenadas.service';

describe('CargarCoordenadasService', () => {
  let service: CargarCoordenadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarCoordenadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
