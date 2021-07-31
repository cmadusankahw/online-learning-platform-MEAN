import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { Student } from '../../student/student.model';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from 'src/app/error/error.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, OnDestroy {

  private lastIdSub: Subscription;

  lastId: string;

  constructor(private router: Router,
              public datepipe: DatePipe,
              public authService: AuthService,
              private dialog: MatDialog) { }

  ngOnInit() {
     this.authService.getLastUserId();
     this.lastIdSub = this.authService.getLastIdUpdateListener()
       .subscribe((recievedId: string) => {
         if (recievedId) {
           this.lastId = recievedId;
           console.log( this.lastId);
         }
    });
     this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  }

  ngOnDestroy() {
    if (this.lastIdSub){
      this.lastIdSub.unsubscribe;
    }
  }

  confirmPassword(str1, str2){
    if (str1 === str2) {
      return true;
    } else {
      return false;
    }
  }

   signupUser(signupForm: NgForm) {
    if (signupForm.invalid) {
      console.log('Form Invalid');
    } else {
      if (this.confirmPassword(signupForm.value.user_pass, signupForm.value.user_pass_check)) {
        const user: Student = {
          studentId: this.lastId,
          studentName: signupForm.value.user_name,
          user_type:'Student',
          profilePic: './assets/images/scraper/user.png',
          email: signupForm.value.user_email,
          contactNo: signupForm.value.contact_no,
          gender:  signupForm.value.gender,
          cardId: signupForm.value.cardid,
          Nic: signupForm.value.nic,
          class:  signupForm.value.al_class,
          teacherid: '123',
          stream:  'any', // get from form if required
          status:"New",
          subjects:[]
          };
        this.authService.signUp(user, signupForm.value.user_pass);
        console.log('You have signed up successfully!');
        signupForm.resetForm();
      } else {
        this.dialog.open(ErrorComponent, {data: {message: 'Passwords do not match! Pleasec re-check!'}});
      }

    }
  }


}
