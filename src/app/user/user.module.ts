import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayBookingDataForUserComponent } from './display-booking-data-for-user/display-booking-data-for-user.component';
import { FormsModule } from '@angular/forms';
import { UpcomingBookingsComponent } from './upcoming-bookings/upcoming-bookings.component';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component'; // If using ngModel
import { RouterModule } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip'; // Import the MatTooltipModule


@NgModule({
  declarations: [
    DisplayBookingDataForUserComponent,
    UpcomingBookingsComponent,
    ContactAdminComponent,
    UpdateProfileComponent,
    UserNavbarComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule,MatTooltipModule, FormsModule,BrowserModule , RouterModule,MatTableModule,MatButtonModule,MatButton],
  exports: [
    DisplayBookingDataForUserComponent,
    UserNavbarComponent,
    ContactAdminComponent,
  ],
})
export class UserModule {}
