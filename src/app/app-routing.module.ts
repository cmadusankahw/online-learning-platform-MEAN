import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { NotFoundPageComponent } from './modules/home/not-found-page/not-found-page.component';
import { AuthGuard } from './modules/auth/auth.guard';
import { DashHomeComponent } from './modules/student/dash/pages/dash-home/dash-home.component';
import { DashboardComponent } from './modules/student/dash/dashboard/dashboard.component';
import { DashSettingsComponent } from './modules/student/dash/pages/dash-settings/dash-settings.component';
import { DashDataComponent } from './modules/student/dash/pages/dash-data/dash-data.component';
import { PasswordResetComponent } from './modules/auth/password-reset/password-reset.component';
import { CreateNewPasswordComponent } from './modules/auth/create-new-password/create-new-password.component';
import { HomepageComponent } from './modules/home/homepage/homepage.component';
import { ContactUsComponent } from './modules/home/contact-us/contact-us.component';
import { AddUserComponent } from './modules/auth/add-user/add-user.component';
import { AdminHomeComponent } from './modules/admin/dash/pages/admin-home/admin-home.component';
import { AdminScrapersComponent } from './modules/admin/dash/pages/admin-scrapers/admin-scrapers.component';
import { AdminSettingsComponent } from './modules/admin/dash/pages/admin-settings/admin-settings.component';
import { AdminUsersComponent } from './modules/admin/dash/pages/admin-users/admin-users.component';
import { AdminDashboardComponent } from './modules/admin/dash/dashboard/admin-dashboard.component';
import { AdminScraperDetailsComponent } from './modules/admin/admin-scraper-details/admin-scraper-details.component';
import { AdminAddScraperComponent } from './modules/admin/admin-add-scraper/admin-add-scraper.component';

const routes: Routes = [
  {
    path: 'teacher',
    component: AdminDashboardComponent,
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'add-course', component: AdminAddScraperComponent },
      { path: 'add-video/:id', component: DashDataComponent },
      { path: 'courses', component: DashDataComponent },
      { path: 'users', component: DashDataComponent },
      { path: 'settings', component: AdminSettingsComponent },
      { path: '**', component: NotFoundPageComponent },
    ], canActivate: [AuthGuard]
  },
  {
    path: 'student',
    component: DashboardComponent,
    children: [
      { path: '', component: DashHomeComponent },
      { path: 'course/:id', component: DashDataComponent },
      { path: 'settings', component: DashSettingsComponent },
      { path: '**', component: NotFoundPageComponent },
    ], canActivate: [AuthGuard]
  },
  { path: '', component: HomepageComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: AddUserComponent },
  { path: 'resetpw', component: PasswordResetComponent },
  { path: 'createpw', component: CreateNewPasswordComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
