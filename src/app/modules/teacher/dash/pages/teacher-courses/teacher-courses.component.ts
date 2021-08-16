import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


import { Subscription } from 'rxjs';
import { Course } from '../../../teacher.model';
import { TeacherService } from '../../../teacher.service';


@Component({
  selector: 'app-teacher-courses',
  templateUrl: './teacher-courses.component.html',
  styleUrls: ['./teacher-courses.component.scss']
})
export class TeacherCoursesComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['user_type', 'name', 'email', 'amount_due', 'amount_paid', 'action'];
  dataSource: MatTableDataSource<Course>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // subscritions
  private courseSub: Subscription;

  // final payments list
  courses: Course[] = [
    {   courseId: 'C1',
        courseName: '2023 Chemistry',
        class: 2023,
        status: 'active', // active/ inactive
        thumbnail: '2023',
        teacher: 'ඉදුනිල් අසංක ',
        commence:'',
        expire: '',
        subject: 'Chemistry',
        videos: []}
  ];

  // recieved state
  @Input() userType = 'serviceProvider';


  // selected payment
  selectedCourse: Course;


  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
     // get admin for child comp use
  //  this.adminService.getAdminPayments();
  //  this.paymentDataSub = this.adminService.getMerchantPaymentsUpdateListener().subscribe(
  //    payments => {
  //      if (payments) {
  //        this.recievedPayments = payments;
  //        console.log(this.recievedPayments);
  //        this.dataSource = new MatTableDataSource(this.addPayments(this.recievedPayments, this.userType));
  //        this.dataSource.paginator = this.paginator;
  //        this.dataSource.sort = this.sort;
  //     }
  //    });
   }

  ngOnDestroy() {

    if (this.courseSub) {
      this.courseSub.unsubscribe();
    }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  // classify reieved merchant payments
  // addPayments(payments: MerchantPayments[], state: string): MerchantPayments[] {
  //   const pendingBookings = [];
  //   for (const val of payments) {
  //     if (val.user_type === state) {
  //       pendingBookings.push(Object.assign({}, val));
  //     }
  //   }
  //   this.payments = [...pendingBookings];
  //   return this.payments;
  // }

  // get selected payment details
  // showPaymentDetails(userId: string) {
  //   for (const app of this.payments) {
  //     if (app.user_id === userId) {
  //       this.selectedPayment = app;
  //     }
  //   }
  //   this.payDataSource = new MatTableDataSource(this.selectedPayment.pays);
  //   this.payDataSource.paginator = this.paginator;
  // }

  // get last payment details
  // getLastPayData(payment: MerchantPayments): PaymentData {
  //   let lastPay: PaymentData;
  //   for (var pay of payment.pays) {
  //     lastPay = pay;
  //   }
  //   return lastPay;
  // }

}
