import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
import { AuthGuard } from './auth.guard';
//import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
//import { RawFileListComponent } from 'src/app/raw-file-list/raw-file-list.component';
//import { ProcessedFileListComponent } from 'src/app/processed-file-list/processed-file-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'changeaddress', component: ChangeAddressComponent, canActivate: [AuthGuard] },
  { path: 'changepassword', component: ChangePasswordComponent, canActivate: [AuthGuard]  },
  { path: 'manageuser', component: ManageUserComponent, canActivate: [AuthGuard]  },
  { path: 'vehiclecard', component: VehicleCardComponent, canActivate: [AuthGuard] },
  { path: 'driverinfo', component: DriverComponent, canActivate: [AuthGuard]  },
  { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard]  },
  { path: 'invoices', component: InvoicesComponent, canActivate: [AuthGuard]  },
  { path: 'truckstats', component: TruckStatsComponent, canActivate: [AuthGuard]  },
  { path: 'truckalerts', component: TruckAlertsComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  //{ path: 'processedfilelist/:RawFileName', component:ProcessedFileListComponent },
  //{ path: 'delivery/:Name/:AcctNum/:ShipToCode/:ShipToName', component: DeliveryWindowComponent },

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
