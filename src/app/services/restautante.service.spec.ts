import { TestBed } from '@angular/core/testing';

import { RestautanteService } from './restautante.service';

describe('RestautanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestautanteService = TestBed.get(RestautanteService);
    expect(service).toBeTruthy();
  });
});
