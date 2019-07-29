import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './TeacherPortal.css';

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
        <Link to="/survey" className="surveyButton"><Button>View/Edit Survey</Button></Link>
        <Link to="/studentRepository" className="studentRepositoryButton"><Button>Student Repository</Button></Link>
        <Link to="/teacherRepository" className="teacherRepositoryButton"><Button>Teacher Repository</Button></Link>
        <Link to="/studentSurveyResponses" className="studentSurveyResultsButton"><Button>View Student Survey Results</Button></Link>
        <Link to="/teacherResources" className="createResourcesButton"><Button>Add Student Resources</Button></Link>
      </div>
    );
  }
}

export default TeacherPortal;
