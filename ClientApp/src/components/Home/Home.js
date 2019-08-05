import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Home.scss';

export class Home extends Component {
  render() {
    return (
      <div className="home">
      <div className="container">
        <h1>Be Well In School</h1>
        <Link to ="studentPortal" className="studentLink">
        <button>Student Portal</button>
        </Link>
        <Link to="/teacherPortal" className="teacherLink">
        <button>Teacher Portal</button>
        </Link>
      </div>
      </div>
    );
  }
}

export default Home;
