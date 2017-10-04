import { TestBed, inject } from '@angular/core/testing';

import { BuscarService } from './buscar.service';

describe('BuscarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscarService]
    });
  });

  it('should be created', inject([BuscarService], (service: BuscarService) => {
    expect(service).toBeTruthy();
  }));
});
