import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/home/homeServices/auth.service'; // Adjust the path as necessary
import {BookingUiStatusUpdateService} from 'src/app/GlobalServices/booking-ui-status-update.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent {
  @Output() bookingDetails = new EventEmitter<any>();

  form: FormGroup;

  isAdmin: boolean = false; // Toggle this to show/hide employee ID dropdown
  employeeIds = ['EMP001', 'EMP002', 'EMP003', 'EMP004'];

  // Define two options each for Time and Room
  
  roomOptions = [
    { display: 'Room A', value: 'A' },
    { display: 'Room B', value: 'B' }
  ];
  timeOptions = [
    { display: 'Morning', value: 'morning' },
    { display: 'After Noon', value: 'After Noon' }
  ];

  constructor(private fb: FormBuilder, private datePipe:DatePipe ,private jwt: AuthService, private  bookingStatus:BookingUiStatusUpdateService) {
    this.form = this.fb.group({
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      room: ['', [Validators.required]],
      employeeId: ['']
    });
  }
  today = new Date();
  minDate = this.today;
  maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 14);
  employeeid = this.jwt.decodeRoles()[0];
   name = this.jwt.decodeRoles()[1];

  // Date filter to exclude weekends
  dateFilter = (date: Date | null): boolean => {
    const day = date?.getDay();
    return day !== 0 && day !== 6; // Excludes Sunday (0) and Saturday (6)
  };

  // Define formData with a type (replace 'any' with an appropriate type if known)
formData: any;

onSubmit() {
  if (this.form.valid) {
    const formattedData = this.getFormattedFormValue();
    this.bookingDetails.emit(formattedData);
    
    // Assign formattedData to formData
    this.formData = formattedData;
    this.bookingStatus.updateBookingState(true);
    
  }
}


private getFormattedFormValue() {
  const formValue = { ...this.form.value };

  // Format date
  formValue.date = this.datePipe.transform(formValue.date, 'yyyy-MM-dd'); 

  // Decode employeeId and name from JWT
  const decodedRoles = this.jwt.decodeRoles();
  formValue.employeeId = decodedRoles[0]; // Assuming this returns the employeeId
  formValue.name = decodedRoles[1]; // Assuming this returns the name

  return formValue;
}

  
  
  public bookSelectedSeat(){

  }

}
