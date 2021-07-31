export interface Teacher {
  teacherId: string,
  teacherName: string,
  profilePic: string,
  email: string,
  mobilenumber: string,
  location: string,
  batch: string[],
  subjects: string[],
  rating: number
}


export interface Course {
  courseId: string,
  courseName: string,
  class: number,
  status: string, // active/ inactive
  thumbnail: string,
  teacher: string,
  commence: string,
  expire: string,
  subject: string,
  videos: CourseVideo[]
}


export interface CourseVideo {
  videoId: string,
  title: string,
  link: string,
  expiresIn: string,
  comment: string,
  status: string, // active, inactive
  viewtimes: number,
  type: string,
  thumbnail: string,
  commence: string
}
