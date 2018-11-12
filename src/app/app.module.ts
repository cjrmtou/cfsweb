import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ChangeAddressComponent } from './change-address/change-address.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ManageUserComponent } from './user/manage-user/manage-user.component';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { DriverComponent } from './driver/driver.component';
import { TruckStatsComponent } from './truck-stats/truck-stats.component';
import { TruckAlertsComponent } from './truck-alerts/truck-alerts.component';
import { LoginComponent } from './user/login/login.component';
import { ForgetPasswordComponent } from './user/forget-password/forget-password.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './auth.guard';
import { BannerComponent } from './banner/banner.component';
import { BannerSmallComponent } from './banner-small/banner-small.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ChangeAddressComponent,
    ChangePasswordComponent,
    InvoicesComponent,
    TransactionsComponent,    
    ManageUserComponent,
    VehicleCardComponent,
    DriverComponent,
    TruckStatsComponent,
    TruckAlertsComponent,
    LoginComponent,
    ForgetPasswordComponent,
    BannerComponent,
    BannerSmallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
