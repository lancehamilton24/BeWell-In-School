import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export class EditSurvey extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Link to="/teacherPortal" className="teacherLink">
        <Button>Back To Teacher Portal</Button>
        </Link>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default EditSurvey;
