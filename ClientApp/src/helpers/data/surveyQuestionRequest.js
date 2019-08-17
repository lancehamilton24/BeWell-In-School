import axios from 'axios';

const getAllQuestionsRequest = () => new Promise((resolve, reject) => {
  axios
    .get('http://localhost:64175/api/question/newQuestion')
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

const getSingleQuestion = questionId => axios.get(`http://localhost:64175/api/question/allQuestions/${questionId}`);

const deleteSingleQuestion = questionId => axios.delete(`http://localhost:64175/api/question/deleteQuestion/${questionId}`);

const updateQuestionRequest = (questionId, question) => axios.put(`http://localhost:64175/api/question/updateQuestion/${questionId}`, question);

export default {
  getAllQuestionsRequest,
  postQuestionRequest,
  deleteSingleQuestion,
  updateQuestionRequest,
  getSingleQuestion,
};
