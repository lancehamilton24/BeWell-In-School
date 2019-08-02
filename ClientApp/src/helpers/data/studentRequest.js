import axios from 'axios';

const getAllStudentsRequest = () => new Promise((resolve, reject) => {
  axios
    .get('http://localhost:64175/api/student/allStudents')
    .then((res) => {
      const students = res.data;
      resolve(students);
    })
    .catch(err => reject(err));
});

const getStudentsByTeacher = teacherId => new Promise((resolve, reject) => {
  axios.get(`http://localhost:64175/api/student/allStudents/${teacherId}`)
  .then((res) => {
    const students = res.data;
    resolve(students);
  })
  .catch(err => reject(err));
});

const getSingleStudent = studentId => new Promise((resolve, reject) => {
  axios.get(`http://localhost:64175/api/student/singleStudent/${studentId}`)
  .then((res) => {
    const students = res.data;
    resolve(students);
  })
  .catch(err => reject(err));
});

export default {
  getAllStudentsRequest,
  getStudentsByTeacher,
  getSingleStudent,
};
