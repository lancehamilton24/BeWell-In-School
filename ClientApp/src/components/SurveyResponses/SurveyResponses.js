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
    surveyQuestionRequest.getAllQuestionsRequestTest().then((questions) => {
      this.setState({ questions })
    })
  }

  componentDidMount() {
    this.getAnswersByStudentId();
  }

  render() {
    const { answers, questions } = this.state;
    const surveyAnswers = answers.map(answer => (
      <SurveyResponsesItem
        answers={answer}
        key={answer.id}
        questions={questions}
        
      />
    ));

    // const surveyQuestions = questions.map(question => (
    //   <SurveyResponsesItem
    //   question={question}
    //     key={question.id}
    //   />
    // ));



    return (
      <div>
        <h3>Survey Responses</h3>
        <div>
        {surveyAnswers}
        </div>
      </div>
    )
  }
}

export default SurveyResponses
