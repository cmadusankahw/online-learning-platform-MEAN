import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../student/student.model';
import {  url, getstuentlist,updateallstatus,updatestudent, updateonestudent } from '../student/student.config';


@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private studentlistUpdated = new Subject<any[]>();
  private updateallUpdated = new Subject<any>();
  private userstatusUpdated=new Subject<any>();
  private userdetaisupdated=new Subject<any>();
 

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:align
  getStudentlist(teacherids) {
    const teacherid = teacherids;
   

    this.http.post<{users: any[]}>(url + getstuentlist, {teacherid})
    .subscribe((recievedData) => {
     
      this.studentlistUpdated.next(recievedData.users);

    }, (error) => {
    
      console.log(error);
      });
   
     
  }

  updateallusers(teacherid, status) {
    console.log("here");
  let outmsg="1";
let statuss;
    this.http.put<{message}>(url + updateallstatus, {teacherid, status})
    .subscribe((message) => {
      // tslint:disable-next-line:quotemark
      statuss=message.message;
      console.log("this is from api", message );
      console.log("this is from api", statuss );
 if(statuss==='done'){
   outmsg='1';
 }else{
   // tslint:disable-next-line:quotemark
   outmsg="0";
 }
 console.log(outmsg);
      this.updateallUpdated.next( outmsg);

    }, (error) => {
    
      console.log(error);
      });

  }


  updatestatus(teacherid, status,studentid) {
    console.log("here");
  let outmsg="1";
let statuss;
    this.http.put<{message}>(url + updatestudent, {teacherid, status,studentid})
    .subscribe((message) => {
      // tslint:disable-next-line:quotemark
      statuss=message.message;
      console.log("this is from api", message );
      console.log("this is from api", statuss );
 if(statuss==='done'){
   outmsg='1';
 }else{
   // tslint:disable-next-line:quotemark
   outmsg="0";
 }
 console.log(outmsg);
      this.updateallUpdated.next( outmsg);

    }, (error) => {
    
      console.log(error);
      });

  }


  updateuserdetais(studentid,contactNo,cardId) {
    console.log("here");
  let outmsg="1";
let statuss;
    this.http.put<{message}>(url + updateonestudent, {studentid,contactNo,cardId})
    .subscribe((message) => {
      // tslint:disable-next-line:quotemark
      statuss=message.message;
      
 if(statuss==='done'){
   outmsg='1';
 }else{
   // tslint:disable-next-line:quotemark
   outmsg="0";
 }
 console.log(outmsg);
      this.userdetaisupdated.next( outmsg);

    }, (error) => {
    
      console.log(error);
      });

  }

  getClassStudentsUpdatedListener() {
    return this.studentlistUpdated.asObservable();
  }
  
  getstatussUpdatedListener() {
    return this.updateallUpdated.asObservable();
  }
 
  userstatusListener() {
    return this.userstatusUpdated.asObservable();
  }
 
  userdataupdateListener() {
    return this.userdetaisupdated.asObservable();
  }
 
}





