
import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Student } from '../../student/student.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['user_id', 'card_id', 'name','class','status', 'action'];
  dataSource: MatTableDataSource<Student>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // subscritions
  private userSub: Subscription;
  private routeSub: Subscription;

  // final merchants list
  users: Student[] = [
    {
      studentId: 'S1',
      studentName: 'Test Student',
      user_type: 'student',
      profilePic: 'https://cahsi.utep.edu/wp-content/uploads/kisspng-computer-icons-user-clip-art-user-5abf13db5624e4.1771742215224718993529.png',
      email: 'test@gmail.com',
      contactNo: '0772345678',
      gender: 'Male',
      cardId: 'C001',
      Nic: '9876789V',
      class: 2023,
      teacherid: 't1',
      stream: 'Science',
      subjects: ['Chemistry'],
      status:'active'
    }
  ];

  user: Student;

  payments = [
    {month:'Jan', amount:2000},
    {month:'Feb', amount:2000}
  ]

  @Input() classId: string;

  teacherid = 't1';

  constructor( private authService: AuthService , public http: HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id']) //log the value of id
      this.classId = params['id'];
    });
     // get all users
  // this.authService.getClassStudents(this.teacherid);
   //this.userSub = this.authService.getClassStudentsUpdatedListener().subscribe(
   //  res => {
    //   if (res) {
     //    this.users = res;
      //   console.log(this.user );
      //   alert(this.user);
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
     // }
    // });
    // this.getstudent("t1");
  }

  ngOnDestroy() {

    if (this.userSub) {
      this.userSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }


  getstudent(teacherid) {

    const teachersid = teacherid;
    const details = {teacherid: teachersid};
    this.http
    .post< any >('https://chemwin-backend.uc.r.appspot.com/learn-online/v1/teacher/getstudent/', details)
    .subscribe(responseData => {

      const datas = responseData;
      const newda = datas.users;
      console.log(newda);
      this.dataSource = new MatTableDataSource(newda);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  // get selected scraper run details
  showUserDetails(userId: string) {
    for (const app of this.users) {
      if (app.studentId === userId) {
        this.user = app;
      }
    }
   }


   // remove a user
   removeUser(userId: string) {
     this.authService.removeStudent(userId);
   }


    updateUser(user: Student) {
      this.authService.updateSlectedStudent(user);
    }




}
