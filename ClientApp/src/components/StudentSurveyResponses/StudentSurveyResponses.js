import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class StudentSurveyResponses extends Component {
  render() {
    return (
      <div>
        <Link to="/teacherPortal" className="teacherLink">
        <a class="btn-floating btn-large waves-effect waves-light red"><FontAwesomeIcon icon={faArrowLeft}/></a>
        </Link>
        <h1>All Survey Responses</h1>
      </div>
    );
  }
}

export default StudentSurveyResponses;
