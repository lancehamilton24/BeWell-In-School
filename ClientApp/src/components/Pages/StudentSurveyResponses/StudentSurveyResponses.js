import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import surveyAnswerRequest from '../../../helpers/data/surveyAnswerRequest';
import ResponseItem from '../../ResponseItem/ResponseItem';

export class StudentSurveyResponses extends Component {
  state = {
    responses: []
  }

  getResponses = () => {
    surveyAnswerRequest.getAllSurveysRequest().then((responses) => {
      this.setState({ responses })
    });
  }

  componentDidMount() {
    this.getResponses();
  }

  render() {
    const { responses } = this.state;

    const surveyResponses = responses.map(response => (
      <ResponseItem
        responses={response}
        key={response.id}
      />
    ));

    return (
      <div>
        <Link to="/teacherPortal" className="teacherLink">
        <a class="btn-floating btn-large waves-effect waves-light red"><FontAwesomeIcon icon={faArrowLeft}/></a>
        </Link>
        <h1>All Survey Responses</h1>
        {surveyResponses}
      </div>
    );
  }
}

export default StudentSurveyResponses;
