import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { LoginGuard } from './gaurds/login.guard';
import { AppointmentsComponent } from './components/nurse/nurse-nav/appointments/appointments.component';
import { PatientHistoryComponent } from './components/nurse/nurse-nav/patient-history/patient-history.component';
import { UpdateinfoComponent } from './components/nurse/nurse-nav/updateinfo/updateinfo.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ViewPatientsComponent } from './components/admin/view-patients/view-patients.component';
import { AddDoctorComponent } from './components/admin/add-doctor/add-doctor.component';
import { AddNurseComponent } from './components/admin/add-nurse/add-nurse.component';
import { NotificationComponent } from './components/doctor/notification/notification.component';
import { AppointmentRequestsComponent } from './components/doctor/appointment-requests/appointment-requests.component';
import { AddHealthComponent } from './components/doctor/add-helath/add-health.component';
import { PatientCompleteHistoryDocComponent } from './components/doctor/patient-complete-history/patient-complete-history.component';
import { PatientProfileComponent } from './components/patient/patient-profile/patient-profile.component';
import { ShowDoctorsComponent } from './components/patient/show-doctors/show-doctors.component';
import { DoctorHistoryViewComponent } from './components/doctor/doctor-history-view/doctor-history-view.component';
import { PickAppointmentsComponent } from './components/nurse/nurse-nav/pick-appointments/pick-appointments.component';
import { CompleteHistoryComponent } from './components/patient/complete-history/complete-history.component';
import { HistoryPatientViewComponent } from './components/patient/history-patient-view/history-patient-view.component';
import { UpdateHealthComponent } from './components/doctor/update-health/update-health.component';
import { UpdateProfileComponent } from './components/patient/patient-profile/update-profile/update-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'notauthorized', component: NotFoundComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path: '', component: NavBarComponent
  },
  // {
  //   path: 'add-doctor', component:AddDoctorComponent
  // }
  {
    path: 'admin-dashboard', component:DashboardComponent, canActivate: [LoginGuard],
  },
  {
    path: 'nurse-dashboard/:name/:nurId', component: AppointmentsComponent, canActivate: [LoginGuard]
  },
  // {
  //   path: 'view-patient-history', component: PatientHistoryComponent
  // },
  {
    path: 'update-patient-info/:id/:AID', component: UpdateinfoComponent, canActivate: [LoginGuard]
  },
  {
    path: 'patient-dashboard', component: PatientDashboardComponent, canActivate: [LoginGuard]
  },
  {
    path: 'view-patient-basic-info', component: ViewPatientsComponent,canActivate: [LoginGuard]
  },
  {
    path: 'add-doctor-details', component: AddDoctorComponent,canActivate: [LoginGuard]
  },
  {
    path: 'add-nurse-details', component: AddNurseComponent,canActivate: [LoginGuard]
  },
  {
    path: 'doctor-dashboard/:name/:docId', component: NotificationComponent, canActivate: [LoginGuard]
  },
  {
    path: 'appointment-requests', component:AppointmentRequestsComponent, canActivate: [LoginGuard]
  },
  {
    path: 'add-patient-health', component: AddHealthComponent, canActivate: [LoginGuard]
  },
  {
    path: 'add-patient-health/:name/:PID/:AID', component: AddHealthComponent, canActivate: [LoginGuard]
  },
  {
    path: 'view-complete-history-doc', component:PatientCompleteHistoryDocComponent, canActivate: [LoginGuard]
  },
  {
    path: 'view-your-profile', component:PatientProfileComponent, canActivate: [LoginGuard]
  },
  {
    path: 'book-appointment', component:ShowDoctorsComponent, canActivate: [LoginGuard]
  },
  {
    path: 'show-doctors', component:ShowDoctorsComponent, canActivate: [LoginGuard]
  },
  {
    path: 'show-doctors/:day', component:ShowDoctorsComponent, canActivate: [LoginGuard]
  },
  {
    path: 'patient-history-doctor-view/:id/:name', component:DoctorHistoryViewComponent, canActivate: [LoginGuard]
  },
  {
    path: 'patient-history-nurse-view/:id',component: PatientHistoryComponent, canActivate: [LoginGuard]
  },
  {
    path: 'nurse/pick-appointments', component : PickAppointmentsComponent, canActivate: [LoginGuard]
  },
  {
    path: 'view/complete/history/:id', component : CompleteHistoryComponent,canActivate: [LoginGuard]
  },
  {
    path: 'patient/view/complete/history/:id', component:HistoryPatientViewComponent, canActivate: [LoginGuard]
  },
  {
    path: 'update-health/:pid/:aid', component: UpdateHealthComponent, canActivate: [LoginGuard]
  },
  {
    path: 'update-profile', component: UpdateProfileComponent, canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
