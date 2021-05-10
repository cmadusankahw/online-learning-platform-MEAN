import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddVideosComponent } from './teacher-add-videos.component';

describe('TeacherAddVideosComponent', () => {
  let component: TeacherAddVideosComponent;
  let fixture: ComponentFixture<TeacherAddVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAddVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAddVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
