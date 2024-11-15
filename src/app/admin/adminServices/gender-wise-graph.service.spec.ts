import { TestBed } from '@angular/core/testing';

import { GenderWiseGraphService } from './gender-wise-graph.service';

describe('GenderWiseGraphService', () => {
  let service: GenderWiseGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenderWiseGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
