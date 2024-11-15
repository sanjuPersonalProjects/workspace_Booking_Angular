import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookingRoom, BookingTime, BookingStatus } from 'src/app/shared/enums/enums.enum';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filtersChanged = new EventEmitter<any>();
  filterForm: FormGroup;

  // Expose the enums to the template
  bookingRoomEnum = BookingRoom;
  bookingTimeEnum = BookingTime;
  bookingStatusEnum = BookingStatus;

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      startDate: '',
      endDate: '',
      roomFilter: '',        // enum-bound field
      workspaceFilter: '',
      employeeIdFilter: '',
      bookingTimeFilter: '',  // enum-bound field
      statusFilter: '',       // enum-bound field
    });
  }

  onSearch() {
    // Extract and format the startDate and endDate values from the form controls
    const startDate = this.filterForm.controls['startDate'].value 
      ? new Date(this.filterForm.controls['startDate'].value).toLocaleDateString('en-US') 
      : null;
  
    const endDate = this.filterForm.controls['endDate'].value 
      ? new Date(this.filterForm.controls['endDate'].value).toLocaleDateString('en-US') 
      : null;
  
    // Create a copy of the form's current value and override the date fields with formatted values
    const formValue = {
      ...this.filterForm.value,  // Copy all other form values
      startDate,                 // Use formatted startDate
      endDate                    // Use formatted endDate
    };
  
    // Emit the updated form values
    this.filtersChanged.emit(formValue);
    
    // Log the values for debugging
    console.log(formValue);
  }
  
}