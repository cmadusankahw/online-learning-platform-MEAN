import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { Router} from '@angular/router';


import { ErrorComponent } from 'src/app/error/error.component';
import { DatePipe } from '@angular/common';
import { Student } from '../student.model';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  private userSubs: Subscription;

  // edit profile mode
  editmode = false;

  // bprofile data binding
  student: Student;


   // image to upload
   image: File;
   imageUrl: any = './assets/images/scraper/user.png';


  constructor(private authService: AuthService,
              public dialog: MatDialog,
              public datepipe: DatePipe,
              private router: Router) { }

  ngOnInit() {
    this.authService.getAuthStudent();
    this.userSubs = this.authService.getCurrentStudentUpdatedListener().subscribe (
      user => {
        if (user) {
          this.student = user;
        }
      }, (error) => {
        console.log(error);
        });
  }

  ngOnDestroy() {
    if (this.userSubs) {
      this.userSubs.unsubscribe();
    }
    this.imageUrl = './assets/images/scraper/user.png';
    this.image = null;
  }

  changeUserPassword(pwordForm: NgForm) {
    if (pwordForm.invalid) {
      console.log('Form invalid');
    }
    if ( pwordForm.value.new_password1 !== pwordForm.value.new_password2) {
      this.dialog.open(ErrorComponent, {data: {message: 'Passwords do not match! Please try again!'}});
    }
   // this.serviceProviderService.changeUserPassword(currentPword, newPword);
  }

  // edit user
  editUser(editForm: NgForm) {
    if (editForm.invalid) {
      console.log('Form Invalid');
    } else {
      const user: Student = {
        studentId: this.student.studentId,
        studentName: editForm.value.user_name,
        profilePic: this.student.profilePic,
        email: editForm.value.email,
        contactNo: editForm.value.contact_no,
        gender: editForm.value.gender,
        location: editForm.value.location,
        class: this.student.class,
        stream:this.student.stream,
        subjects:this.student.subjects,
        };
      this.authService.updateStudent(user, this.image);
      this.userSubs = this.authService.getStudentUpdatteListener()
      .subscribe((res) => {
        this.student = res;
        console.log('Student details updated successfully!');
      });
      editForm.resetForm();
      this.editmode = false;
    }
  }

    // profile pic uploading
    onImageUploaded(event: Event) {
      const file = (event.target as HTMLInputElement).files[0];
      const mimeType = file.type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image = file;
        this.imageUrl = reader.result;
      };
    }

}
