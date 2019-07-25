import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export class StudentSurveyResponses extends Component {
  render() {
    return (
      <div>
        <Link to="/teacherPortal" className="teacherLink">
        <Button>Back To Teacher Portal</Button>
        </Link>
        <h1>All Survey Responses</h1>
      </div>
    );
  }
}

export default StudentSurveyResponses;
