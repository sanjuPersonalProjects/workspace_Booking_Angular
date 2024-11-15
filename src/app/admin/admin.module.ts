import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminActionsComponent } from './adminNavbar/admin-actions.component';
import { GraphComponent} from './adminComponents/graph/graph.component';
import { BookingDetailsByIdComponent } from '../shared/booking-details-by-id/booking-details-by-id.component';
import { BookingComponent } from '../shared/booking/booking.component';
import { BookingDetailsComponent } from '../shared/booking-details/booking-details.component';
import { AdminBookingDataByFiltersComponent } from './adminComponents/admin-booking-data-by-filters/admin-booking-data-by-filters.component';
import { CommonModule } from '@angular/common';
import { UserMessagesComponent } from './adminComponents/user-messages/user-messages.component';
import { SignOutComponent } from '../sign-out/sign-out.component';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { ChartsComponent } from './adminComponents/charts/charts.component';
import { GenderWiseGraphComponent } from './adminComponents/gender-wise-graph/gender-wise-graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FilterTableComponent } from "./adminComponents/bookingDataFilter/filter-table/filter-table.component";
import { FilterComponent } from "./adminComponents/bookingDataFilter/filter/filter.component";
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BookingFormComponent } from '../shared/booking-form/booking-form.component';


const routes: Routes = [
  {
    path: 'admin-actions',
    

    children: [
      { path: '', component: GraphComponent },
      { path: 'sign-out', component: SignOutComponent },
      { path: 'booking' , component: BookingComponent },
      { path: 'booking-form', component: BookingFormComponent },
      { path: 'upcoming-bookings', component: BookingComponent },
      { path: 'booking-details', component: BookingDetailsComponent },
      { path: 'employee-wise-data', component: AdminBookingDataByFiltersComponent },
      { path: 'charts', component: ChartsComponent},
      // { path: '**', component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdminActionsComponent,
    AdminBookingDataByFiltersComponent,
    UserMessagesComponent,
    ChartsComponent,
    GraphComponent,
    FilterTableComponent,
    FilterComponent,

    
    

    // Add other components that belong to this module here
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule, // Add FormsModule here
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    MatTableModule,
    MatButtonToggleGroup, MatButtonToggle,
    GenderWiseGraphComponent,
    NgxChartsModule,
    MatCardModule,
    MatFormField,
    MatInputModule,
    MatButton,
    MatLabel,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule
    
    
],
  exports: [
    RouterModule,
    AdminActionsComponent,
    AdminBookingDataByFiltersComponent,
    UserMessagesComponent,
    ChartsComponent,
  
    
  ],
})
export class AdminRoutingModule {}
