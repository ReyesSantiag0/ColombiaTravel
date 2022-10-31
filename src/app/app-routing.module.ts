import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorSessionComponent } from './components/administrator-session/administrator-session.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverAccountComponent } from './components/recover-account/recover-account.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { TourGuideSessionComponent } from './components/tour-guide-session/tour-guide-session.component';
import { TouristActivitiesGuideComponent } from './components/tourist-activities-guide/tourist-activities-guide.component';
import { TouristActivityComponent } from './components/tourist-activity/tourist-activity.component';
import { UserPaymentsComponent } from './components/user-payments/user-payments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'recover-account', component: RecoverAccountComponent },
  { path: 'tourist-activity', component: TouristActivityComponent },
  { path: 'user-payments', component: UserPaymentsComponent },
  { path: 'administrator-session', component: AdministratorSessionComponent },
  { path: 'tour-guide-session', component: TourGuideSessionComponent },
  {
    path: 'tourist-activities-guide',
    component: TouristActivitiesGuideComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
