import { TestBed } from '@angular/core/testing';

import { ShareBookingDataService } from './share-booking-data.service';

describe('ShareBookingDataService', () => {
  let service: ShareBookingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareBookingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
