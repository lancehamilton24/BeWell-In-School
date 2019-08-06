import axios from 'axios';

const postSurveyRequest = addNewSurvey => new Promise((resolve, reject) => {
  axios
    .post('http://localhost:64175/api/survey/register', addNewSurvey)
    .then((res) => {
      const surveys = res.data;
      resolve(surveys);
    })
    .catch(err => reject(err));
});

const postSurvey = createSurveyRequest => new Promise((resolve, reject) => {
  axios
    .post('http://localhost:64175/api/answer/register', createSurveyRequest)
    .then((res) => {
      const surveys = res.data;
      resolve(surveys);
    })
    .catch(err => reject(err));
});


export default {
  postSurveyRequest, 
  postSurvey
}