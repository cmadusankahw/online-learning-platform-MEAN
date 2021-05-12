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
import { AddUserComponent } from './modules/auth/add-user/add-user.component';
import { TeacherHomeComponent } from './modules/teacher/dash/pages/teacher-home/teacher-home.component';
import { TeacherSettingsComponent } from './modules/teacher/dash/pages/teacher-settings/teacher-settings.component';
import { TeacherDashboardComponent } from './modules/teacher/dash/dashboard/teacher-dashboard.component';
import { TeacherUsersComponent } from './modules/teacher/dash/pages/teacher-users/teacher-users.component';
import { TeacherCoursesComponent } from './modules/teacher/dash/pages/teacher-courses/teacher-courses.component';
import { TeacherAddVideosComponent } from './modules/teacher/teacher-add-videos/teacher-add-videos.component';
import { TeacherAddCourseComponent } from './modules/teacher/teacher-add-course/teacher-add-course.component';

const routes: Routes = [
  {
    path: 'teacher',
    component: TeacherDashboardComponent,
    children: [
      { path: '', component: TeacherHomeComponent },
      { path: 'add-course', component: TeacherAddCourseComponent },
      { path: 'add-video/:id', component: TeacherAddVideosComponent },
      { path: 'courses', component: TeacherCoursesComponent },
      { path: 'users', component: TeacherUsersComponent },
      { path: 'settings', component: TeacherSettingsComponent },
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
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
