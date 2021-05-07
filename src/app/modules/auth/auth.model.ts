


export interface User {
  user_id: string;
  user_type: string;
  email: string;
  password: string;
  state: boolean;
}

export interface LogIn {
  email: string;
  password: string;
}

export interface Teacher {
   teacherId: string,
   teacherName: string,
   contactNo: string,
   NIC: string,
   gender: string,
   email: string,
   class: number,
   subjects: string[],
   stream: string
}

export interface Student {
  studentId: string,
  studentName: string,
  contactNo: string,
  email: string,
  gender: string,
  location: string,
  class: number,
  stream: string,
  subjects:string[],
}
