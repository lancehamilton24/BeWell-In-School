import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import answerRequest from '../../../helpers/data/answerRequest';
import SurveyResponsesItem from '../../SurveyResponsesItem/SurveyResponsesItem';
import surveyQuestionRequest from '../../../helpers/data/surveyQuestionRequest';
import './SurveyResponses.scss';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export class SurveyResponses extends Component {
  state = {
    selectedStudentId: this.props.location.state.selectedStudentId,
    selectedStudent: this.props.location.state.selectedStudent,
    answers: [],
    questions: [],
  }

  getAnswersByStudentId = () => {
    const { selectedStudentId } = this.state
    answerRequest.getAnswersByStudentRequest(selectedStudentId).then((answers) => {
      this.setState({ answers })
    })
    surveyQuestionRequest.getAllQuestionsRequest().then((questions) => {
      this.setState({ questions })
    })
  }

  componentDidMount() {
    this.getAnswersByStudentId();
  }

  render() {
    const { answers, questions, selectedStudentId, selectedStudent } = this.state;
    const surveyAnswers = answers.map(answer => (
      <SurveyResponsesItem
        answers={answer}
        key={answer.id}
        questions={questions}

      />
    ));

    return (
      <div>
        <Link to={{ pathname: "/studentPortal", state: { selectedStudentId, selectedStudent } }} title="Student Portal" className="teacherLink">
          <button class="nav-btn btn-floating btn-large waves-effect waves-light btn tooltipped" data-tip="Back" data-position="right"><FontAwesomeIcon icon={faArrowLeft} /></button>
        </Link>
        <ReactTooltip />
        <div className="container survey-responses">
          <div className="card page-header">
          <h3><b>Survey Responses</b></h3>
          </div>
          <div className="all-survey-responses">
          <div className="row">
            <div className="col s3"><h5><b>Answer</b></h5></div>
            <div className="col s3"><h5><b>Question</b></h5></div>
            <div className="col s3"><h5><b>Date Submitted</b></h5></div>
          </div>
          <hr></hr>
          <div>
            {surveyAnswers}
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SurveyResponses
