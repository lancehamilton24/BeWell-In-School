import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './StudentPortal.scss';
import studentRequest from '../../../helpers/data/studentRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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


  render() {
    const { selectedStudent, selectedStudentId } = this.state;


    return (
      <div className="studentportal">
        <Link to="/" title="Home" className="homeLink">
          <button className="home-btn btn-floating btn-medium waves-effect waves-light black"><FontAwesomeIcon icon={faHome} /></button>
        </Link>
        <div className="student-portal">
          <h1>Welcome to BeWell</h1>
          <div>
            <h5>{selectedStudent.firstName} {selectedStudent.lastName}</h5>
          </div>
          <div className="student-links">
          <Link to={{
            pathname: '/studentsurvey',
            state: {
              selectedStudent: selectedStudent,
              selectedStudentId: selectedStudentId
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
