


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
  cardId: string;
  Nic: string,
  class: number;
  teacherid: string;
  stream: string;
  subjects: string[];
  status:string;
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

export interface HeaderDetails{
  userType: string,
  userName: string,
  profilePic: string,
  cardId: string,
  status: string;
}
