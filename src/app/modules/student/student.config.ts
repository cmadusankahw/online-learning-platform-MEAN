const url: string = "http://localhost:3000/learn-online/v1/";


const getStudent = 'auth/student/one'; // userId
const getAuthStudent = 'auth/student/current'; // userId
const getStudents = "auth/student/all";
const getClassStudents = "auth/student/class/";
const getHeader =  'auth/header';
const getLastId = 'auth/last-id';

const postSignIn = 'auth/signin';
const postSignUp = 'auth/signup';
const postUploadImage = 'auth/student/image'
const putUpdateStudent = 'auth/student/one'; // current userId
const putUpdateSelectedStudent = 'auth/student/selected'; // current userId
const deleteStudent = "auth/student/one/" // given userId

export {
  url,
  getStudent,
  getStudents,
  getAuthStudent,
  getClassStudents,
  getHeader,
  getLastId,
  postSignIn,
  postSignUp,
  postUploadImage,
  putUpdateStudent,
  putUpdateSelectedStudent,
  deleteStudent
};
