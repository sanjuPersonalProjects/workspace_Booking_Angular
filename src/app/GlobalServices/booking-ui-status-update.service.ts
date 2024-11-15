import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingUiStatusUpdateService {
  // Holds the latest booking status for seats
  private bookingStateSource = new BehaviorSubject<boolean>(false);
  
  // Observable for other components to subscribe to
  bookingState$ = this.bookingStateSource.asObservable();

  // Method to update booking state
  updateBookingState(isUpdated: boolean): void {
    this.bookingStateSource.next(isUpdated);
  }
}
