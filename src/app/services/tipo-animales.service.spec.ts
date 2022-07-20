import { TestBed } from '@angular/core/testing';

import { TipoAnimalesService } from './tipo-animales.service';

describe('TipoAnimalesService', () => {
  let service: TipoAnimalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoAnimalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
