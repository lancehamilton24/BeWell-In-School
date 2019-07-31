import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div className="home container">
        <h1>Be Well In School</h1>
        <Link to ="studentPortal" className="studentLink">
        <Button>Student Portal</Button>
        </Link>
        <Link to="/teacherPortal" className="teacherLink">
        <Button>Teacher Portal</Button>
        </Link>
      </div>
    );
  }
}

export default Home;
