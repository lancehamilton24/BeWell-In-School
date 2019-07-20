import axios from 'axios';

const getAllTeachersRequest = () => new Promise((resolve, reject) => {
  axios
    .get('http://localhost:64175/api/teacher/allTeachers')
    .then((res) => {
      const teachers = res.data;
      resolve(teachers);
    })
    .catch(err => reject(err));
});

export default {
  getAllTeachersRequest,
};