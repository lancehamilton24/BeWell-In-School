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
        <div className="portal container">
          <h1>Student Portal</h1>
          <div>
            <h5>{selectedStudent.firstName} {selectedStudent.lastName}</h5>
          </div>
          <Link to={{
            pathname: '/studentsurvey',
            state: {
              selectedStudent: selectedStudent,
              selectedStudentId: selectedStudentId
            }
          }} className="complete-survey-button"><Button>Daily Survey</Button></Link>
          <Link to={{
            pathname: '/surveyResponses',
            state: {
              selectedStudent: selectedStudent,
              selectedStudentId: selectedStudentId
            }
          }} className="survey-responses-button"><Button>View Previous Surveys</Button></Link>

          <Link to={{
            pathname: '/studentResources',
            state: {
              selectedStudent: selectedStudent,
              selectedStudentId: selectedStudentId
            }
          }} className="student-resources-button"><Button>Extra Resources</Button></Link>
        </div>
      </div>
    );
  }
}

export default StudentPortal;
