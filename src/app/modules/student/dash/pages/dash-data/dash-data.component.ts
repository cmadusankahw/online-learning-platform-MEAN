import { Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from '../../../student.model';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-dash-data',
  templateUrl: './dash-data.component.html',
  styleUrls: ['./dash-data.component.scss']
})
export class DashDataComponent implements OnInit, OnDestroy {

  @ViewChild('videoPlayer', {static: false}) videoplayer: ElementRef;

  private courseSub: Subscription;

  private router: Router;
  cour = [];
  playlink ;
  vtype;
  details;
  selected;
  bunnylink;
  course: Course =
    {
      courseId: 'C1',
      courseName: 'Chemistry',
      class: 2023,
      thumbnail:'./assets/images/classes/chemistry2023/1.jpg',
      teacher: 'Prasanna Baddewithana',
      videoLinks: [{
        title: 'රසායනික ගණිතය 1',
        link: './assets/courses/chemistry2013/1.mp4',
        expiresIn: '2021-05-20',
        // tslint:disable-next-line:max-line-length
        comments: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui do lorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
      },
      {
        title: 'රසායනික Test',
        link: 'GYAB4Td62zI',
        expiresIn: '2021-05-20',
        comments: ''
      },
      {
        title: 'රසායනික ගණිතය 3',
        link: 'GYAB4Td62zI',
        expiresIn: '2021-05-20',
        comments: ''
      }
    ],
      commence: '2021-04-05',
      expire: '2023-08-05'
    };

    // tslint:disable-next-line:variable-name
    now_playing_id = 'රසායනික ගණිතය 3';



  // tslint:disable-next-line:variable-name
  constructor( private route: ActivatedRoute, public http: HttpClient, private _sanitizer: DomSanitizer) {

   }

  ngOnInit() {

    const coursess = this.route.snapshot.params.id;
    console.log(coursess);
    // this.authService.getAuthUser();
    //  this.userSub = this.authService.getCurrentUserUpdatteListener()
    //    .subscribe((res: User) => {
    //      if (res) {
    //        this.user = res;
    //      }
    // }, (error) => {
    //   console.log(error);
    //   });
    this.getcourse(coursess);
    this.selected = this.cour[0].title;
    // console.log('es', this.cour[0].link);

  }

  ngOnDestroy(){
    if (this.courseSub) {
      this.courseSub.unsubscribe();
  }
  }

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}

selectvideo(link, type, comments, title) {
  // this.playlink = link;
  this.playlink = this._sanitizer.bypassSecurityTrustResourceUrl(link);
  this.vtype = type;
  this.details = comments;
  this.selected = title;
  this.bunnylink = link;
  //this.playlink = this.playlink + 'rel;=0&amp;controls=0';
  // alert(this.playlink);
}

getcourse(courseids) {
  const courid = courseids;
  const details = {courseid: courid };
  this.http
  .post< any >('http://localhost:3000/learn-online/v1/video/getvideo', details)
  .subscribe(responseData => {
    console.log(responseData);
    const datas = responseData;
    const newda = datas.message;
    this.cour = newda ;
    console.log(newda);
    alert(newda);

  });
 

  }

}
