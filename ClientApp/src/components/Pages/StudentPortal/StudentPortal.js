import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './StudentPortal.scss';
import studentRequest from '../../../helpers/data/studentRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export class StudentPortal extends Component {
  state = {
    selectedStudentId: this.props.location.state.selectedStudentId,
    selectedStudent: [],
  }

  studentProfile = () => {
    const { selectedStudentId } = this.state;
    studentRequest.getSingleStudent(selectedStudentId).then((selectedStudent) => {
      this.setState({ selectedStudent });
    })
  }

  componentDidMount() {
    this.studentProfile();
  }

  
  componentWillUnmount(state) {
    // Remember state for the next mount
    state = state;
  }



  render() {
    const { selectedStudent, selectedStudentId } = this.state;

    return (
      <div className="student-portal-home">
        <Link to="/" className="homeLink">
          <button className="home-btn btn-floating btn-large waves-effect waves-light btn tooltipped" data-tip="Home" data-position="right"><FontAwesomeIcon icon={faHome} /></button>
        </Link>
        <ReactTooltip />
        <div className="container">
        <div className="card student-name">
           <h3><b>Welcome {selectedStudent.firstName}</b></h3>
          </div>
          </div>
        <div className="student-portal">
          <div className="student-links">
          <Link to={{
            pathname: '/studentsurvey',
            state: {
              selectedStudent: selectedStudent,
              selectedStudentId: selectedStudentId,
            }
          }} className="student-links-btn"><button><h3>Daily <br></br> Survey</h3></button></Link>
          <Link to={{
            pathname: '/surveyResponses',
            state: {
              selectedStudent: selectedStudent,
              selectedStudentId: selectedStudentId
            }
          }} className="student-links-btn"><button><h3>View Previous Surveys</h3></button></Link>

          <Link to={{
            pathname: '/studentResources',
            state: {
              selectedStudent: selectedStudent,
              selectedStudentId: selectedStudentId
            }
          }} className="student-links-btn"><button><h3>Extra <br></br> Resources</h3></button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentPortal;
