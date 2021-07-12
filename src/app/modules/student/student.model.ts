


export interface DateObj {
  date: number;
  month: number;
  year: number;
}

// new

export interface Student {
  studentId: string;
  studentName: string;
  user_type: string;
  profilePic: string;
  email: string;
  contactNo: string;
  gender: string;
  location: string;
  class: number;
  stream: string;
  subjects: string[];
}

export interface Course {
  courseId: string;
  courseName: string;
  class: number;
  thumbnail: string;
  teacher: string;
  videoLinks: VideoLink[];
  commence: string;
  expire: string;
}

export interface VideoLink {
  title: string;
  link: string;
  expiresIn: string;
  comments: string;
}
