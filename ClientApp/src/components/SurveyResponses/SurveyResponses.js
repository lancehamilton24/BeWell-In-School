import React, { Component } from 'react'
import answerRequest from '../../helpers/data/answerRequest';
import SurveyResponsesItem from '../SurveyResponsesItem/SurveyResponsesItem';
import surveyQuestionRequest from '../../helpers/data/surveyQuestionRequest';

export class SurveyResponses extends Component {
  state ={
    currentStudentId: this.props.location.state.selectedStudentId,
    answers: [],
    questions: [],
  }

  getAnswersByStudentId = () => {
    const { currentStudentId } = this.state
    answerRequest.getAnswersByStudentRequest(currentStudentId).then((answers) => {
      this.setState({ answers })
    })
  }

  getQuestions = () => {
    surveyQuestionRequest.getAllQuestionsRequest().then((questions) => {
      this.setState({ questions })
    })
  }

  componentDidMount() {
    this.getAnswersByStudentId();
    this.getQuestions();
  }

  render() {
    const { answers, questions } = this.state;

    const surveyAnswers = answers.map(answer => (
      <SurveyResponsesItem
        answers={answer}
        key={answer.id}
      />
    ));

    const surveyQuestions = questions.map(question => (
      <SurveyResponsesItem
        questions={question}
        key={question.id}
      />
    ));

    console.log(surveyAnswers)


    return (
      <div>
        <h1>survey response</h1>
        <div>
        {surveyAnswers}
        </div>
      </div>
    )
  }
}

export default SurveyResponses
