import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export class TeacherResources extends Component {
  render() {
    return (
      <div>
        <Link to="/teacherPortal" className="teacherLink">
        <Button>Back To Teacher Portal</Button>
        </Link>
        <h1>Teacher Resources</h1>
      </div>
    );
  }
}

export default TeacherResources;
