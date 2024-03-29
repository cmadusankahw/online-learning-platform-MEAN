import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InputsModule,
        InputUtilitiesModule,
        WavesModule,
        ButtonsModule,
        ModalModule,
        TableModule,
        ChartsModule,
        CarouselModule } from 'angular-bootstrap-md';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatDialogModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgbModule, NgbDropdownModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import { DatePipe } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTabsModule} from '@angular/material/tabs';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/auth/header/header.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { FooterComponent } from './modules/home/footer/footer.component';
import { AddUserComponent } from './modules/auth/add-user/add-user.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { UserProfileComponent } from './modules/student/user-profile/user-profile.component';
import { NotFoundPageComponent } from './modules/home/not-found-page/not-found-page.component';
import { AuthInterceptor } from './modules/auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';
import { DashboardComponent } from './modules/student/dash/dashboard/dashboard.component';
import { DashHomeComponent } from './modules/student/dash/pages/dash-home/dash-home.component';
import { DashDataComponent } from './modules/student/dash/pages/dash-data/dash-data.component';
import { AllUsersComponent } from './modules/teacher/all-users/all-users.component';
import { DashSettingsComponent } from './modules/student/dash/pages/dash-settings/dash-settings.component';
import { CreateNewPasswordComponent } from './modules/auth/create-new-password/create-new-password.component';
import { PasswordResetComponent } from './modules/auth/password-reset/password-reset.component';
import { HomepageComponent } from './modules/home/homepage/homepage.component';
import { TeacherDashboardComponent } from './modules/teacher/dash/dashboard/teacher-dashboard.component';
import { TeacherHomeComponent } from './modules/teacher/dash/pages/teacher-home/teacher-home.component';
import { TeacherSettingsComponent } from './modules/teacher/dash/pages/teacher-settings/teacher-settings.component';
import { TeacherUsersComponent } from './modules/teacher/dash/pages/teacher-users/teacher-users.component';
import { TeacherCoursesComponent } from './modules/teacher/dash/pages/teacher-courses/teacher-courses.component';
import { TeacherAddCourseComponent } from './modules/teacher/teacher-add-course/teacher-add-course.component';
import { TeacherAddVideosComponent } from './modules/teacher/teacher-add-videos/teacher-add-videos.component';
import { NewcoursesComponent } from './modules/auth/newcourses/newcourses.component';
import { NoRightClickDirective } from './no-right-click.directive';
import { VideoPlayerComponent } from './modules/student/video-player/video-player.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    AddUserComponent,
    UserProfileComponent,
    NotFoundPageComponent,
    ErrorComponent,
    SuccessComponent,
    CreateNewPasswordComponent,
    PasswordResetComponent,
    HomepageComponent,
    DashboardComponent,
    DashHomeComponent,
    DashDataComponent,
    AllUsersComponent,
    DashSettingsComponent,
    TeacherHomeComponent,
    TeacherDashboardComponent,
    TeacherSettingsComponent,
    TeacherUsersComponent,
    TeacherCoursesComponent,
    TeacherAddCourseComponent,
    TeacherAddVideosComponent,
    NewcoursesComponent,
    NoRightClickDirective,
    VideoPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    InputsModule,
    InputUtilitiesModule,
    WavesModule,
    ButtonsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ModalModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    TableModule,
    MatTableModule,
    MatPaginatorModule,
    ChartsModule,
    MatProgressBarModule,
    NgbModule,
    MatCheckboxModule,
    CarouselModule,
    MatSliderModule,
    MatDialogModule,
    NgbDropdownModule,
    DragDropModule,
    NgbProgressbarModule,
    MatTabsModule,
    FlexLayoutModule 
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    DatePipe,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent, SuccessComponent]
})
export class AppModule { }
