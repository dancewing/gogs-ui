import { TestBed, inject } from '@angular/core/testing';

import { OcticonsService } from './octicons.service';

describe('OcticonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcticonsService]
    });
  });

  it('should be created', inject([OcticonsService], (service: OcticonsService) => {
    expect(service).toBeTruthy();
  }));
});
