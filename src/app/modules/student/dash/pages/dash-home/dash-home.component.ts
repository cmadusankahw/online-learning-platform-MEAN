import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { Course, HeaderDetails, Student } from '../../../student.model';
import { HttpClient } from '@angular/common/http';
import {  url } from '../../..//student.config';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss']
})
export class DashHomeComponent implements OnInit, OnDestroy {
  mediaSub: Subscription;
  deviceXs: boolean;
  checkstatuss ='active';
  studentid = 'U1';
  teacherid = '123';

makepayemnt = 'No';
  courses: Course[] = [
    {
      courseId: 'C1',
      courseName: 'Chemistry',
      class: 2023,
      thumbnail: './assets/images/classes/chemistry2023/1.jpg',
      teacher: 'Anushka Idunil',
      videoLinks: [{
        title: 'රසායනික ගණිතය ',
        link: '',
        expiresIn: '2021-05-20',
        comments: ''
      }],
      commence: '2021-04-05',
      expire: '2023-08-05'
    },
    {
      courseId: 'C1',
      courseName: 'Chemistry',
      class: 2023,
      thumbnail: './assets/images/classes/chemistry2023/2.jpg',
      teacher: 'Prasanna Baddewithana',
      videoLinks: [{
        title: 'රසායනික ගණිතය ',
        link: '',
        expiresIn: '2021-05-20',
        comments: ''
      }],
      commence: '2021-04-05',
      expire: '2023-08-05'
    },
    {
      courseId: 'C1',
      courseName: 'Physics',
      class: 2023,
      thumbnail: './assets/images/classes/chemistry2023/3.jpg',
      teacher: 'Prasanna Baddewithana',
      videoLinks: [{
        title: 'රසායනික ගණිතය ',
        link: '',
        expiresIn: '2021-05-20',
        comments: ''
      }],
      commence: '2021-04-05',
      expire: '2023-08-05'
    }
  ];

  studentName = 'ඔබ ';
  cour = [];

  private userSub: Subscription;

  user: Student;



  constructor(private authService: AuthService, public http: HttpClient,public mediaObserver: MediaObserver) { }

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })
   this.authService.getAuthStudent();
   this.userSub = this.authService.getCurrentStudentUpdatedListener()
     .subscribe((res: Student) => {
       if (res) {
         this.studentid = res.studentId;
         this.studentName = res.studentName;
         this.teacherid = res.teacherid;
         this.user = res;
         this.getcourse();
         this.checkstatus().then(res =>  this.getcourse());

        }} ,(error: any) => {
     console.log(error);
    });


  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
  }
  }

  getcourse() {
    console.log(this.checkstatuss);

    if (this.checkstatuss !== 'deactive' && this.checkstatuss !== 'pending') {
      console.log('here');
      const details = {teacherid: this.teacherid, class: '2023' };
      this.http
    .post< any >(url+'course/getcourse', details)
    .subscribe(responseData => {
      console.log(responseData);
      const datas = responseData;
      const newda = datas.message;
      this.cour = newda ;
      console.log(this.cour);


    });

  } else {
    this.makepayemnt = 'Yes';
  }
    }

    checkstatus() {
      console.log( this.teacherid, this.studentid );
      return new Promise<void>((resolve, reject) => {
      const details = {teacherid: this.teacherid, studentid: this.studentid  };
      this.http
      .post< any >('https://chemwin-backend.uc.r.appspot.com/learn-online/v1/teacher/chekstatus', details)
      .subscribe(responseData => {
        console.log(responseData);
        const datas = responseData;
        const newda = datas.message[0].status;

        console.log(newda);
        this.checkstatuss = newda;

      });
      resolve();
    });
    }
}
