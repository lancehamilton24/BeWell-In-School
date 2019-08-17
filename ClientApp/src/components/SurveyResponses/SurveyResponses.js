import React, { Component } from 'react'
import answerRequest from '../../helpers/data/answerRequest';
import SurveyResponsesItem from '../SurveyResponsesItem/SurveyResponsesItem';

export class SurveyResponses extends Component {
  state ={
    currentStudentId: this.props.location.state.selectedStudentId,
    answers: [],
  }

  getAnswersByStudentId = () => {
    const { currentStudentId } = this.state
    answerRequest.getAnswersByStudentRequest(currentStudentId).then((answers) => {
      this.setState({ answers })
    })
  }

  componentDidMount() {
    this.getAnswersByStudentId();
  }

  render() {
    const { answers } = this.state;

    const surveyAnswers = answers.map(answer => (
      <SurveyResponsesItem
        answers={answer}
        key={answer.id}
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
