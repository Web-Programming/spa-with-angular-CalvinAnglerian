import { TestBed } from '@angular/core/testing';

import { HousingServices } from './housing-services';

describe('HousingServices', () => {
  let service: HousingServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousingServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
