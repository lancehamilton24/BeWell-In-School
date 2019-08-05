import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
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
      <div className="teacher-portal container">
        <h1>Teacher Portal</h1>
        <p>Welcome {teacherName}</p>
        <div className="teacher-links">
          <div>
        <Link to="/survey" className="surveyButton"><button>View/Edit Survey</button></Link>
        <Link to="/studentRepository" className="studentRepositoryButton"><button>Student Repository</button></Link>
          </div>
          <div>
        <Link to="/studentSurveyResponses" className="studentSurveyResultsButton"><button>View Student Survey Results</button></Link>
        <Link to="/resources" className="createResourcesButton"><button>Add Student Resources</button></Link>
        </div>
        </div>
      </div>
    );
  }
}

export default TeacherPortal;
