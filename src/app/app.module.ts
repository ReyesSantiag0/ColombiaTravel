import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeadComponent } from './components/head/head.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RecoverAccountComponent } from './components/recover-account/recover-account.component';
import { TouristActivityComponent } from './components/tourist-activity/tourist-activity.component';
import { HeadUserComponent } from './components/head-user/head-user.component';
import { UserPaymentsComponent } from './components/user-payments/user-payments.component';
import { AdministratorSessionComponent } from './components/administrator-session/administrator-session.component';
import { TourGuideSessionComponent } from './components/tour-guide-session/tour-guide-session.component';
import { TouristActivitiesGuideComponent } from './components/tourist-activities-guide/tourist-activities-guide.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HomeComponent, HeadComponent, LoginComponent, RegisterUserComponent, RecoverAccountComponent, TouristActivityComponent, HeadUserComponent, UserPaymentsComponent, AdministratorSessionComponent, TourGuideSessionComponent, TouristActivitiesGuideComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
