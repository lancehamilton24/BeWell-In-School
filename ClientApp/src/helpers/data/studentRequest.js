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

const getStudentsByGrade = () => new Promise((resolve, reject) => {
  axios
    .get('http://localhost:64175/api/student/allStudents')
    .then((res) => {
      const students = res.data;
      resolve(students);
    })
    .catch(err => reject(err));
});

export default {
  getAllStudentsRequest,
  getStudentsByGrade,
};
