import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareBookingDataService } from '../share-booking-data.service';
import { Subscription } from 'rxjs';
import { DataService } from '../shared-service/data.service';
import { AuthService } from 'src/app/home/homeServices/auth.service';

@Component({
  selector: 'app-details-after-booking',
  standalone: true,
  templateUrl: './details-after-booking.component.html',
  styleUrls: ['./details-after-booking.component.css']
})
export class DetailsAfterBookingComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  employeeId!: number;  // Change to number as per backend requirement
  employeeName!: string;
  date!: string;
  time!: string;
  room!: string;
  workspace!: string;
  bookingData: any = null;

  constructor(
    private commService: ShareBookingDataService,
    private bookWorkSpace: DataService,
    private jwt: AuthService
  ) {}

  ngOnInit() {
    this.subscription = this.commService.messageObservable.subscribe((data: any) => {
      if (data) {
        this.bookingData = data;
        this.setBookingDetails();
        console.log("Booking details received:", data);
      } else {
        console.log("No booking data received yet.");
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private setBookingDetails() {
    // Decoding roles to get employeeId and employeeName
    this.employeeId = Number(this.jwt.decodeRoles()[0]); // Assuming employeeId is a number
    this.employeeName = this.jwt.decodeRoles()[1];
    this.date = this.bookingData.date; // Assuming this is formatted correctly
    this.time = this.bookingData.time;
    this.room = this.bookingData.room;
    this.workspace = this.bookingData.seat; // Assuming 'seat' is the property in your data
  }

  isFormComplete(): boolean {
    return !!(this.employeeId && this.employeeName && this.date && this.time && this.room && this.workspace);
  }

  onActionClick(): void {
    if (this.isFormComplete()) {
      const bookingDataToSubmit = {
         // Default value, assuming it's auto-generated by the backend
        bookingDate: new Date(this.date).toISOString(), // Ensure this is formatted as needed
        bookingTime: this.time,
        bookedRoom: this.room,
        bookedWorkspace: this.workspace,
        employeeId: this.employeeId,
        employeeName: this.employeeName,
        status: 'Booked', // Default status
        
      };

      this.bookWorkSpace.postBookingDetails(bookingDataToSubmit)
        .subscribe(response => {
          console.log('Booking details submitted successfully:', response);
          // Handle successful submission (e.g., navigate to another page, show a success message, etc.)
        }, error => {
          console.error('Error submitting booking details:', error);
          // Handle error (e.g., show an error message)
        });

      console.log('Action button clicked for booking details:', bookingDataToSubmit);
    } else {
      console.warn('Booking details are incomplete. Please fill all required fields.');
    }
  }
}