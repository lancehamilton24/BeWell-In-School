import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import answerRequest from '../../../helpers/data/answerRequest';
import SurveyResponsesItem from '../../SurveyResponsesItem/SurveyResponsesItem';
import surveyQuestionRequest from '../../../helpers/data/surveyQuestionRequest';
import './SurveyResponses.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
    const { answers, questions, currentStudentId } = this.state;
    const surveyAnswers = answers.map(answer => (
      <SurveyResponsesItem
        answers={answer}
        key={answer.id}
        questions={questions}
        
      />
    ));

    return (
      <div>
        <Link to={{ pathname: "/studentPortal", state: { currentStudentId } }} title="Student Portal" className="teacherLink">
          <button class="nav-btn btn-floating btn-medium waves-effect waves-light black"><FontAwesomeIcon icon={faArrowLeft} /></button>
        </Link>
        <h3>Survey Responses</h3>
        <div>
        {surveyAnswers}
        </div>
      </div>
    )
  }
}

export default SurveyResponses
