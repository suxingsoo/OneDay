import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './client//login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { IndexComponent } from './client/index/index.component';
import { HomeComponent } from './client/home/home.component';
import { FooterComponent } from './client/footer/footer.component';
import { UserHomeComponent } from './client/user-home/user-home.component';
import {  AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BusesComponent } from './admin/buses/buses.component';
import { DriversComponent } from './admin/drivers/drivers.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { UpdateBusComponent } from './admin/update-bus/update-bus.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { UpdateDriverComponent } from './admin/update-driver/update-driver.component';
import { AddBusComponent } from './admin/add-bus/add-bus.component';
import { BookingFormComponent } from './client/booking-form/booking-form.component';
import { HistoryComponent } from './client/history/history.component'
import { BusinfoComponent } from './client/businfo/businfo.component';
// import { BusinfoComponent } from './client/businfo/businfo.component';



const routes: Routes = [
  // { path: '/userhome', redirectTo: 'home', pathMatch: 'full' },
  { path:'',component:HomeComponent },
  { path: 'client/register', component: RegisterComponent}, 
  { path: 'client/login', component: LoginComponent},
  { path:'client/booking',component:BookingFormComponent },
  {path: 'client/history', component:HistoryComponent},
  { path:'userhome', component:UserHomeComponent},
  { path: 'admin/login',component:AdminloginComponent },
  { path:'admin/register',component:AdminregisterComponent},
  { path:'admin', component: NavbarComponent,
  children:[
  { path: 'bookings', component: BookingsComponent },
  { path: 'buses', component: BusesComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'user-profile', component: UserProfileComponent },git 
  { path:'update-bus/:id', component:UpdateBusComponent },
  { path:'update-user/:id', component:UpdateUserComponent },
  { path:'update-driver/:id', component:UpdateDriverComponent },
  { path:'add-bus', component:AddBusComponent },
  { path: 'client/businfo', component: BusinfoComponentgit }
  ]
},
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }