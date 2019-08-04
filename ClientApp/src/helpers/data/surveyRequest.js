import axios from 'axios';

const postAnswerRequest = addNewAnswer => new Promise((resolve, reject) => {
  axios
    .post('http://localhost:64175/api/survey/register', addNewSurvey)
    .then((res) => {
      const surveys = res.data;
      resolve(surveys);
    })
    .catch(err => reject(err));
});


export default {
  postSurveyRequest
}