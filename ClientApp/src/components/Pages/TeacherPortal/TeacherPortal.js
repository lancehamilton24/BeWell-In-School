import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './TeacherPortal.scss';

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
          <button className="home-btn btn-floating btn-medium waves-effect waves-light black"><FontAwesomeIcon icon={faHome} /></button>
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
