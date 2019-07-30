import axios from 'axios';

const getAllQuestionsRequest = () => new Promise((resolve, reject) => {
  axios
    .get('http://localhost:64175/api/question/allQuestions')
    .then((res) => {
      const questions = res.data;
      resolve(questions);
    })
    .catch(err => reject(err));
});

const postQuestionRequest = addNewQuestion => new Promise((resolve, reject) => {
  axios
    .post('http://localhost:64175/api/question/register', addNewQuestion)
    .then((res) => {
      const questions = res.data;
      resolve(questions);
    })
    .catch(err => reject(err));
});

export default {
  getAllQuestionsRequest,
  postQuestionRequest,
};
