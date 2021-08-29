
import { Component, OnInit, ViewChild, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Student } from '../../student/student.model';
import { ActivatedRoute } from '@angular/router';
import { TeachersService } from '../../teacher/teachers.service';
import {FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit, OnDestroy, AfterViewInit {

  displayedColumns: string[] = ['user_id', 'card_id', 'name','class','status', 'action'];
  dataSource: MatTableDataSource<Student>;

 // @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngAfterViewInit() {
  
   
  }
  // subscritions
  // tslint:disable-next-line:member-ordering
  private userSub: Subscription;
  // tslint:disable-next-line:member-ordering
  private routeSub: Subscription;
students:any[];
users:any[]=[];
isedit=true;
 usercard:string;
  // final merchants list
selectedstatus='deactive';

  usersss: any[];
  // tslint:disable-next-line:member-ordering

  user:Student;

  

  // tslint:disable-next-line:member-ordering
  @Input() classId: string;

  teacherid = 't1';

  // tslint:disable-next-line:max-line-length
  constructor( private authService: AuthService , public http: HttpClient,private route: ActivatedRoute, private teacherservices: TeachersService,) { }

  ngOnInit() {
  
 
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id']) //log the value of id
      this.classId = params['id'];
 
     

    });
    this.getdata();

  }





  ngOnDestroy() {

    if (this.userSub) {
      this.userSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }


  getdata(){
    this.teacherservices.getStudentlist('t1');
    this.userSub = this.teacherservices.getClassStudentsUpdatedListener()
       .subscribe((res) => {
        console.log(res);
        if (res) {

        
          console.log(res);
          
this.users.length = 0
           // this.users.push(res);
          res.map(std => this.users.push(std));
         
          this.dataSource = new MatTableDataSource(this.users);
          
          if(this.dataSource){this.dataSource.paginator = this.paginator;}
         
          this.dataSource.sort = this.sort;
          console.log(this.users);
            }
       }, (error) => {
        console.log(error);
      });
  }



updateallstudent(status){
 let teacher= this.teacherid;
let update;
  this.teacherservices.updateallusers(teacher,status);
    update = this.teacherservices.getstatussUpdatedListener()
       .subscribe((res) => { 
         console.log(res)
if(res ==='1'){
  alert("updated");
  this.getdata();
  
}else{
  alert("Sorry Not Updated")
}

       });

}


updateuserstatus(status,studnetid){
  if(status==="active"){
    status="deactive";
  }else{
    status="active";
  }
  let teacher= this.teacherid;
 let update;
   this.teacherservices.updatestatus(teacher,status,studnetid);
     update = this.teacherservices.getstatussUpdatedListener()
        .subscribe((res) => { 
          console.log(res)
 if(res ==='1'){
   alert("updated");
   this.getdata();
   
 }else{
   alert("Sorry Not Updated")
 }
 
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
  showUserDetails(userId: string , status: string) {
    this.selectedstatus = status;
    
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

 edituser(){
  this.isedit=false;

 }

 updateUserData(userForm:NgForm){
  // alert(userForm.value.usercardid);
 //  alert(userForm.value.contatctNo);
  // alert(this.user.studentId)
   let updateData;

   this.teacherservices.updateuserdetais(this.user.studentId,userForm.value.contatctNo,userForm.value.usercardid);
   updateData = this.teacherservices.userdataupdateListener()
      .subscribe((res) => { 
        console.log(res)
if(res ==='1'){
 alert("updated");
 this.getdata();
 
}else{
 alert("Sorry Not Updated")
}

      });

 }

 

}

