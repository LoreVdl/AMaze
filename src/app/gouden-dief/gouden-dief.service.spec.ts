import { TestBed } from '@angular/core/testing';

import { GoudenDiefService } from './gouden-dief.service';

describe('GoudenDiefService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoudenDiefService = TestBed.get(GoudenDiefService);
    expect(service).toBeTruthy();
  });
});
