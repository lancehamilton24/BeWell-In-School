import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './TeacherPortal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';

export class TeacherPortal extends Component {
  state = {
    teachers: [],
    dropdownOpen: false,
    teacherId: '',
    teacherName: '',
  }


  render() {
    const { teacherName } = this.state;

    return (
      <div>
        <Link to="/" title="Home" className="homeLink">
          <a className="btn-floating btn-large waves-effect waves-light red"><FontAwesomeIcon icon={faHome} /></a>
        </Link>
        <div className="teacher-portal">
          <h1>Teacher Portal</h1>
          <div className="teacher-links">
            <Link to="/survey" className="teacher-links-btn"><button>View/Edit Survey</button></Link>
            <Link to="/studentRepository" className="teacher-links-btn"><button>Student Repository</button></Link>
            <Link to="/resources" className="teacher-links-btn"><button>Add Student Resources</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherPortal;
