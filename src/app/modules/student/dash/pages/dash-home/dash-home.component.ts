import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { Course, Student } from '../../../student.model';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss']
})
export class DashHomeComponent implements OnInit, OnDestroy {

  courses: Course[] =[
    {
      courseId: 'C1',
      courseName: 'Chemistry',
      class: 2023,
      thumbnail:'./assets/images/classes/chemistry2023/1.jpg',
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
      courseName: 'Chemistry',
      class: 2023,
      thumbnail:'./assets/images/classes/chemistry2023/2.jpg',
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
      thumbnail:'./assets/images/classes/chemistry2023/3.jpg',
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
  ]

  studentName = "අසංක ඉදුනිල් "


  private userSub: Subscription;

  user: Student;



  constructor(private authService: AuthService) { }

  ngOnInit() {
  //   this.authService.getAuthUser();
  //   this.userSub = this.authService.getCurrentUserUpdatteListener()
  //     .subscribe((res: Student) => {
  //       if (res) {
  //         this.user = res;
  //         this.studentName = res.studentName
  //       }
  //  }, (error) => {
  //    console.log(error);
  //    });

  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
  }
  }



}
