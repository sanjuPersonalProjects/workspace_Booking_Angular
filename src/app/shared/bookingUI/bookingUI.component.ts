import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareBookingDataService } from '../share-booking-data.service';
import { UserBookingStatusService } from 'src/app/user/userService/user-booking-status.service';
import { BookingUiStatusUpdateService } from 'src/app/GlobalServices/booking-ui-status-update.service';
import { Subscription } from 'rxjs';

enum SeatState {
  Free = 'free',
  Selected = 'selected',
  Booked = 'booked',
  Taken = 'taken'
}

interface WorkspaceData {
  workspace: string;
  status: string;
}

@Component({
  selector: 'app-bookingUI',
  templateUrl: './bookingUI.component.html',
  styleUrls: ['./bookingUI.component.css']
})
export class BookingUIComponent implements OnChanges, OnInit, OnDestroy {
  
  ngOnInit(): void {
    // Subscribe to booking state changes
    this.bookingStateSubscription = this.bookingStateService.bookingState$.subscribe(isUpdated => {
      if (isUpdated) {
        this.refreshBookingStatus();
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.bookingStateSubscription.unsubscribe();
  }

  refreshBookingStatus(): void {
    // Logic to fetch the latest booking data from the backend
    console.log('Refreshing booking status...');
  }

  private bookingStateSubscription!: Subscription;
  @Input() formData!: any;
  seats: Record<string, SeatState> = {};
  currentlySelectedSeat: string | null = null;
  seatColors: Record<SeatState, string> = {
    [SeatState.Free]: 'lightblue',
    [SeatState.Selected]: 'lightgreen',
    [SeatState.Booked]: 'darkgreen',
    [SeatState.Taken]: 'red'
  };

  constructor(
    private http: HttpClient,
    private bookingDataToDetails: ShareBookingDataService,
    private BookingStatus: UserBookingStatusService,
    private bookingStateService: BookingUiStatusUpdateService
    
  ) {}
   
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formData'] && this.formData) {
      const { date, time, room, employeeId } = this.formData;
      this.fetchSeatData(date, time, room, employeeId);
    }
  }

  private fetchSeatData(bookingDate: string, bookingTime: string, bookedRoom: string, employeeId?: number): void {
    this.BookingStatus.getBookingData(bookingDate, bookingTime, bookedRoom, employeeId).subscribe(data => {
      this.initializeSeats(data);
    });
  }

  private initializeSeats(data: WorkspaceData[]): void {
    for (let i = 1; i <= 84; i++) {
      this.seats[i.toString()] = SeatState.Free;
    }

    data.forEach(seatData => {
      const seatNumber = seatData.workspace.trim();
      if (seatData.status === 'Booked') {
        this.seats[seatNumber] = SeatState.Booked;
      } else {
        this.seats[seatNumber] = SeatState.Taken;
      }
    });
  }

  // toggleSeat(seat: string): void {
  //   if (this.seats[seat] === SeatState.Taken || this.seats[seat] === SeatState.Booked) {
  //     return;
  //   }

  //   if (this.currentlySelectedSeat && this.currentlySelectedSeat !== seat) {
  //     this.seats[this.currentlySelectedSeat] = SeatState.Free;
  //   }

  //   const isAnySeatBooked = Object.values(this.seats).includes(SeatState.Booked);
  //   if (isAnySeatBooked && this.seats[seat] !== SeatState.Selected) {
  //     return;
  //   }

  //   if (this.seats[seat] === SeatState.Free) {
  //     this.seats[seat] = SeatState.Selected;
  //     this.currentlySelectedSeat = seat;
  //     this.sendData(seat);
  //   } else {
  //     this.seats[seat] = SeatState.Free;
  //     this.currentlySelectedSeat = null;
  //   }
  // }

  toggleSeat(seat: string): void {
    // Prevent selection if the seat is already Booked or Taken
    if (this.seats[seat] === SeatState.Taken || this.seats[seat] === SeatState.Booked) {
      return; // Exit the function early to prevent any further action
    }
  
    // Deselect the previously selected seat (if any)
    if (this.currentlySelectedSeat && this.currentlySelectedSeat !== seat) {
      this.seats[this.currentlySelectedSeat] = SeatState.Free;
    }
  
    // Check if there's already a Selected seat and prevent booking multiple seats at once
    const isAnySeatSelected = Object.values(this.seats).includes(SeatState.Selected);
    if (isAnySeatSelected && this.seats[seat] !== SeatState.Selected) {
      return; // Prevent selection if another seat is already selected
    }
  
    // Toggle seat state between Free and Selected
    if (this.seats[seat] === SeatState.Free) {
      this.seats[seat] = SeatState.Selected;
      this.currentlySelectedSeat = seat;
      this.sendData(seat);
    } else if (this.seats[seat] === SeatState.Selected) {
      // Deselect the seat if it's already Selected
      this.seats[seat] = SeatState.Free;
      this.currentlySelectedSeat = null;
    }
  }
  

  getSeatColor(seat: string): string {
    return this.seatColors[this.seats[seat]];
  }

  sendData(seat: string): void {
    const bookingData = { ...this.formData, seat };
    this.bookingDataToDetails.sendMessage(bookingData);
    console.log("Data sent:", bookingData);
  }
}
