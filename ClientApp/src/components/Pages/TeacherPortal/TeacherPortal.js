import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
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
        <Link to="/" className="homeLink">
          <button className="home-btn btn-floating btn-large waves-effect waves-light btn tooltipped" data-tip="Home" data-position="right"><FontAwesomeIcon icon={faHome} /></button>
        </Link>
        <ReactTooltip />
        <div className="teacher-portal">
          <div className="container">
        <div className="teacher-name">
           <h3><b>Teacher Portal</b></h3>
          </div>
          </div>
          <div className="teacher-links">
            <Link to="/survey" className="teacher-links-btn"><button><h3>View +
               <br></br>Edit Survey</h3></button></Link>
            <Link to="/studentRepository" className="teacher-links-btn"><button><h3>Student<br></br> 
              Repository</h3></button></Link>
            <Link to="/resources" className="teacher-links-btn"><button><h3>Add Student Resources</h3></button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherPortal;
