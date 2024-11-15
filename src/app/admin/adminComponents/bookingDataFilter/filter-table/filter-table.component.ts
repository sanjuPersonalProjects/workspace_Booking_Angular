import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent{
  @Input() bookings: any[] = [];
  displayedColumns: string[] = ['bookingDate', 'bookingTime', 'bookedRoom', 'bookedWorkspace', 'employeeId', 'status'];

}
