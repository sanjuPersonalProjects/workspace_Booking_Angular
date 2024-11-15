import { Component, OnInit } from '@angular/core';
import { AdminActionsService } from 'src/app/admin/adminServices/admin-actions.service';




@Component({
  selector: 'app-admin-booking-data-by-filters',
  templateUrl: './admin-booking-data-by-filters.component.html',
  styleUrls: ['./admin-booking-data-by-filters.component.css'],
})
export class AdminBookingDataByFiltersComponent implements OnInit {
  bookings: any[] = [];

  constructor(private adminDataByFilters: AdminActionsService) {}

  ngOnInit() {}

  onFiltersChanged(filters: any) {
    this.adminDataByFilters.getBookingDataByFilters(filters).subscribe((data) => {
      this.bookings = data;
    });
  }
}
