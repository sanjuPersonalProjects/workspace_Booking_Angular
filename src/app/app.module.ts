import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DataService } from './shared/shared-service/data.service';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { FooterComponent } from './footer/footer.component';
import { UserBookingStatusService } from 'src/app/user/userService/user-booking-status.service';
import { ReactiveFormsModule } from '@angular/forms';
import { adminBookingService } from './admin/adminServices/admin-booking.service';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutingModule } from './user/user-routing/user-routing.module';
import { JwtInterceptor } from './home/homeServices/auth.service';
import { SignOutComponent } from './sign-out/sign-out.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

@NgModule({ declarations: [
        AppComponent,
        FooterComponent,
        SignOutComponent,
        // Add other components that belong to this module here
    ],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
        MatSnackBarModule,
        AppRoutingModule,
        FormsModule,
        SharedModule,
        UserModule,
        HomeModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        UserRoutingModule,
        RouterModule,
        BrowserAnimationsModule], providers: [DataService, UserBookingStatusService, adminBookingService, {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true
          }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
