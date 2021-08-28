import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {

  // navigation
  home = 'txt-white row';
  users = 'txt-white row';
  settings = 'txt-white row';
  courses = 'txt-white row';

  topIcon = "./assets/images/scraper/logo_lg.png";


   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
   .pipe(
     map(result => result.matches),
     shareReplay()
   );

 constructor(private breakpointObserver: BreakpointObserver,
             private router: Router,private authService: AuthService,) { }

 ngOnInit() {
   this.routerEvents();
 }


 routerEvents() {
   this.router.events.subscribe((e) => {
     if (e instanceof NavigationStart) {
       if (e.url === '/teacher') {
         this.navHome();
       } else if (e.url === '/teacher/users') {
         this.navUsers();
       } else if (e.url === '/teacher/courses') {
        this.navCourses();
      }else if (e.url === '/admin/settings') {
       this.navSettings();
   }
   }
 });
 }

 navHome() {
   this.home = 'txt-white row active-nav';
   this.users = this.courses = this.settings  = 'txt-white row';
 }

 navUsers() {
   this.users = 'txt-white row active-nav';
   this.home = this.courses =this.settings  = 'txt-white row';
 }


 navSettings() {
   this.settings = 'txt-white row active-nav';
   this.users = this.courses =this.home  = 'txt-white row';
 }

 navCourses() {
  this.courses = 'txt-white row active-nav';
  this.users = this.settings =this.home  = 'txt-white row';
}


onSignOut() {
 
  this.authService.signOut();
  this.router.navigate(['/']);
}

}
