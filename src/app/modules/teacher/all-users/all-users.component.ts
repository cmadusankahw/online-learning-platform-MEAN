
import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Student } from '../../student/student.model';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['user_id',  'name', 'email', 'contact_no','class', 'action'];
  dataSource: MatTableDataSource<Student>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // subscritions
  private userSub: Subscription;
  private scraperSub: Subscription;

  // final merchants list
  users: Student[];

  user: Student;

  @Input() classId: string;

  teacherid = 't1';

  constructor( private authService: AuthService , public http: HttpClient) { }

  ngOnInit() {
     // get all users
  // this.authService.getClassStudents(this.teacherid);
   //this.userSub = this.authService.getClassStudentsUpdatedListener().subscribe(
   //  res => {
    //   if (res) {
     //    this.users = res;
      //   console.log(this.user );
      //   alert(this.user);
      //   this.dataSource = new MatTableDataSource(this.users);
     //    this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
     // }
    // });
    this.getstudent("t1");
  }

  ngOnDestroy() {

    if (this.userSub) {
      this.userSub.unsubscribe();
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
