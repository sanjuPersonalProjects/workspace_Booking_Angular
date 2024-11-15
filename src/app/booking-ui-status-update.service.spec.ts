import { TestBed } from '@angular/core/testing';

import { BookingUiStatusUpdateService } from './GlobalServices/booking-ui-status-update.service';

describe('BookingUiStatusUpdateService', () => {
  let service: BookingUiStatusUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingUiStatusUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
