import axios from 'axios';

const getAllAnswersRequest = () => new Promise((resolve, reject) => {
  axios
    .get('http://localhost:64175/api/answer/allAnswers')
    .then((res) => {
      const answers = res.data;
      resolve(answers);
    })
    .catch(err => reject(err));
});

const postAnswerRequest = addNewAnswer => new Promise((resolve, reject) => {
  axios
    .post('http://localhost:64175/api/answer/register', addNewAnswer)
    .then((res) => {
      const answers = res.data;
      resolve(answers);
    })
    .catch(err => reject(err));
});


export default {
  getAllAnswersRequest,
  postAnswerRequest,
}