import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from '../shared/booking/booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { GraphDataService } from '../graph-data.service';
import { DataService } from './shared-service/data.service';
import { AuthService } from '../home/homeServices/auth.service';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import {  provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Import HttpClientModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { adminBookingService } from '../admin/adminServices/admin-booking.service';
import { AdminActionsService } from '../admin/adminServices/admin-actions.service';
import { BookingUIComponent } from './bookingUI/bookingUI.component';
import { BookingCancellationComponent } from './booking-cancellation/booking-cancellation.component';
import { BookingDetailsByIdComponent } from './booking-details-by-id/booking-details-by-id.component';
import { LoaderInterceptor } from '../interceptors/loader.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { MatNativeDateModule } from '@angular/material/core'; // Required for date picker
import { DatePipe } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';


import { MatButton, MatButtonModule } from '@angular/material/button'; // Material button
import { BookingFormComponent } from './booking-form/booking-form.component';
import { WorkspaceSelectionComponent } from './workspace-selection/workspace-selection.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DetailsAfterBookingComponent } from "./details-after-booking/details-after-booking.component";

@NgModule({ declarations: [
        BookingComponent,
        BookingDetailsComponent,
        BookingFormComponent,
        AdminBookingComponent,
        BookingUIComponent,
        BookingCancellationComponent,
        BookingDetailsByIdComponent,
        SpinnerComponent,
        WorkspaceSelectionComponent,
        
    ], // Include BookingDataService in the providers array
    
    exports: [
        BookingComponent,
        SpinnerComponent,
        BookingDetailsComponent,
        BookingUIComponent,
        AdminBookingComponent,
        BookingCancellationComponent,
        BookingDetailsByIdComponent,
        
    ], imports: [CommonModule,
    FormsModule,
    MatSelectModule,
    MatButton,
    BrowserModule,
    MatTooltipModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    MatInputModule, // Add MatInputModule here
    MatFormFieldModule, // Add MatFormFieldModule here
    MatDatepickerModule, // Add MatDatepickerModule here
    MatNativeDateModule, // Add MatNativeDateModule here
    MatButtonModule, // Add MatButtonModule here
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule, DetailsAfterBookingComponent], providers: [
           DatePipe,
        DataService,
        AuthService,
        GraphDataService,
        adminBookingService,
        AdminActionsService,
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class SharedModule {}
