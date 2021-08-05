import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { MatDialog, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { HeaderDetails, Student } from '../student/student.model';
import { getHeader, getLastId, postSignIn, url, postSignUp, postUploadImage, getStudent, getAuthStudent, getStudents, putUpdateStudent, putUpdateSelectedStudent, deleteStudent, getClassStudents } from '../student/student.config';
import { LogIn } from './auth.model';
import { SuccessComponent } from 'src/app/success/success.component';

@Injectable({providedIn: 'root'})
export class AuthService {
  private lastIdUpdated = new Subject<string>();
  private studentUpdated = new Subject<Student>();
  private classStudentsUpdated = new Subject<Student[]>();
  private currentStudentUpdated = new Subject<Student>();
  private studentsUpdated = new Subject<Student[]>();
  private authStatusListener = new Subject<boolean>();
  private headerDetailsListener = new Subject<HeaderDetails>();

  // user logged in
  private currentStudent: Student;

  // all users
  private students: Student[];
  private student: Student;

  // last signed user id
  private lastId: string;

  // storing token for auth validation
  private token: string;

  // timer to auto logout
  private tokenTimer: any;

  private headerDetails: HeaderDetails;

  // user login status
  private isAuthenticated = false;

  // snack bars for notification display
  private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(private http: HttpClient,
              private router: Router,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar) {}


  // GET

    getStudent(userId) {
      this.http.get<{user: Student}>(url + getStudent + userId)
        .subscribe((res) => {
          this.student = res.user;
          this.studentUpdated.next(this.student);
      });
    }

    getAuthStudent() {
      this.http.get<{user: Student}>(url + getAuthStudent )
      .subscribe((res) => {
        this.currentStudent = res.user;
        this.currentStudentUpdated.next(this.currentStudent);
    });
    }

    getStudents() {
      this.http.get<{users: Student[]}>(url + getStudents)
        .subscribe((res) => {
          this.studentsUpdated.next(res.users);
      });
    }

    getClassStudents(classId) {
      this.http.get<{users: Student[]}>(url + getClassStudents + classId )
        .subscribe((res) => {
          this.studentsUpdated.next(res.users);
      });
    }


  // get details for header
  getHeaderDetails() {
    if (this.token) {
      this.http.get<{user_type: string, user_name: string, profile_pic: string, cardId: string, status: string;}>(url + getHeader)
      .subscribe((recievedHeader) => {
        this.headerDetails = {
          userType: recievedHeader.user_type,
          userName: recievedHeader.user_name,
          profilePic: recievedHeader.profile_pic,
          cardId: recievedHeader.cardId,
          status: recievedHeader.status};
        this.headerDetailsListener.next(this.headerDetails);
    });
    }
  }


   // get last product id
  getLastUserId() {
        this.http.get<{ lastid: string }>(url + getLastId)
        .subscribe((recievedId) => {
          console.log(recievedId.lastid);
          this.lastId = recievedId.lastid;
          this.lastIdUpdated.next(this.lastId);
        });
  }

  // get token to be used by other services
  getToken() {
    return this.token;
  }

  // get authentication statusgetAuthAdmin
  getisAuth() {
    return this.isAuthenticated;
  }


  // listners for subjects
  getLastIdUpdateListener() {
    return this.lastIdUpdated.asObservable();
  }

  getAuhStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getHeaderDetailsListener() {
    return this.headerDetailsListener.asObservable();
  }

  getStudentsUpdateListener() {
    return this.studentsUpdated.asObservable();
  }

  getStudentUpdatteListener() {
    return this.studentUpdated.asObservable();
  }

  getCurrentStudentUpdatedListener() {
    return this.currentStudentUpdated.asObservable();
  }

  getClassStudentsUpdatedListener() {
    return this.classStudentsUpdated.asObservable();
  }



// POST , PUT

  signUp(user: Student, password: string) {
      this.http.post<{message: string}>(url + postSignUp , {user, password})
     .subscribe((recievedData) => {
       console.log(recievedData.message);
       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
       this.router.onSameUrlNavigation = 'reload';
       this.router.navigate(['/']);
       this._snackBar.open(recievedData.message , 'Dismiss', {
        duration: 2500,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        });
     }, (error) => {
       console.log(error);
       });
 }

// update user profile
 updateStudent(user: Student, image: File) {
  if (image) {
    const newImage = new FormData();
    newImage.append('images[]', image, image.name);

    this.http.post<{profile_pic: string}>(url + postUploadImage, newImage )
    .subscribe ((recievedImage) => {
    console.log(recievedImage);
    user.profilePic = recievedImage.profile_pic;
    this.http.post<{message: string}>(url + putUpdateStudent, user)
    .subscribe((recievedData) => {
      console.log(recievedData.message);
      this.currentStudent = user;
      this.currentStudentUpdated.next(this.currentStudent);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/student/settings']);
      this.dialog.open(SuccessComponent, {data: {message: 'Your Profile Details Updated Successfully!'}});
    }, (error) => {
      console.log(error);
      });
    });
  } else {
    this.http.post<{message: string}>(url + putUpdateStudent , user)
    .subscribe((recievedData) => {
      console.log(recievedData.message);
      this.currentStudent = user;
      this.currentStudentUpdated.next(this.currentStudent);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/student/settings']);
      this.dialog.open(SuccessComponent, {data: {message: 'Your Profile Details Updated Successfully!'}});
    }, (error) => {
      console.log(error);
      });
   }
}

// update selected user
updateSlectedStudent(user: Student) {
  this.http.post<{message: string}>(url + putUpdateSelectedStudent , user)
  .subscribe((recievedData) => {
    console.log(recievedData.message);
    this.studentUpdated.next(user);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/teacher/users']);
    this._snackBar.open('User\'s details updated!', 'Dismiss', {
      duration: 2500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      });
  }, (error) => {
    console.log(error);
    });
}

  // user profile change password
  changeUserPassword(userType: string, currentPword: string, newPword: string) {
    // code here
  }



// DELETE

removeStudent(userId){
    this.http.delete<{ message: string }>(url + deleteStudent + userId)
      .subscribe((recievedData) => {
        if (this.students.length) {
          const updatedUsers = this.students.filter(usr => usr.studentId !== userId);
          this.students = updatedUsers;
          this.studentsUpdated.next(this.students);
          this._snackBar.open(recievedData.message , 'Dismiss', {
            duration: 2500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            });
        }
        }, (error) => {
          console.log(error);
          });
}


  // log in user
  signIn(login: LogIn) {
    this.http.post<{ message: string,
                     token: any,
                     expiersIn: number,
                     user_type: string }>(url + postSignIn , login)
    .subscribe((recievedData) => {
      console.log(recievedData.message);

      this.setAuthTimer(recievedData.expiersIn);

      this.token = recievedData.token;
      console.log(this.token);
      this.getHeaderDetails();

      if (recievedData.token) {
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date (now.getTime() + recievedData.expiersIn * 1000 );
        this.saveAuthData(recievedData.token, expirationDate );
          this.router.navigate(['/student']);
      }
   }, (error) => {
     console.log(error);
   });
 }

   // auto auth user after restart
   autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiersIn = authInformation.expiarationDate.getTime() - now.getTime();
    if (expiersIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiersIn / 1000); // node timers works in secords (not ms)
      this.authStatusListener.next(true);
    } else{
      this.clearAuthData();
    }

  }


 // log out user
 signOut() {
   this.token = null;
   this.isAuthenticated = false;
   this.authStatusListener.next(false);
   this.clearAuthData();
   clearTimeout(this.tokenTimer);
 }


 // starts the session timer
 private setAuthTimer(duration: number) {
   console.log ('Setting timer to : ' + duration);
   this.tokenTimer = setTimeout(() => {
    this.signOut();
    alert('Session Time Out! You have been logged out! Please log in back..');
    this.router.navigate(['/']);
   }, duration * 1000);
 }

 // store token and user data in local storage
 private saveAuthData(token: string, expiarationDate: Date) {
   localStorage.setItem('token', token);
   localStorage.setItem('expiration', expiarationDate.toISOString());
 }

 // clear locally sotred auth data in timeout or sign out
 private clearAuthData() {
   localStorage.removeItem('token');
   localStorage.removeItem('expiration');
 }

 // access locally stored auth data
 private getAuthData() {
   const token = localStorage.getItem('token');
   const expiration = localStorage.getItem('expiration');
   if (!token || !expiration) {
     return;
   }

   return {
     token,
     expiarationDate : new Date(expiration),
   };

 }

}
