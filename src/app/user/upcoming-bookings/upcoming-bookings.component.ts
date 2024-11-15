import { Component, OnInit } from '@angular/core';
import { UserBookingStatusService } from 'src/app/user/userService/user-booking-status.service';
import { ListBookingDetails } from 'src/app/shared/booking-details';
import { AuthService } from 'src/app/home/homeServices/auth.service';

@Component({
  selector: 'app-upcoming-bookings',
  templateUrl: './upcoming-bookings.component.html',
  styleUrls: ['./upcoming-bookings.component.css'],
})
export class UpcomingBookingsComponent implements OnInit {
  bookings: ListBookingDetails[] = [];
  displayedColumns: string[] = [
    'bookingDate',
    'bookingTime',
    'bookedRoom',
    'bookedWorkspace',
    'employeeName',
    'status',
    'details',
    'cancel',
  ];
  employeeId: number | undefined;

  constructor(
    private bookingService: UserBookingStatusService,
    private jwt: AuthService
  ) {}

  ngOnInit(): void {
    this.employeeId = this.getEmployeeId();
    if (this.employeeId) {
      this.bookingService.getUpcomingBookings(this.employeeId).subscribe({
        next: (bookings) => (this.bookings = bookings),
        error: (err) => console.error('Failed to load bookings', err),
      });
    }
  }

  private getEmployeeId(): number {
    const decodedRoles = this.jwt.decodeRoles();
    return decodedRoles && decodedRoles.length > 0
      ? parseInt(decodedRoles[0], 10)
      : -1; // Handle null more appropriately in your app
  }
}
