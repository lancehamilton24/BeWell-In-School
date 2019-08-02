import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './StudentPortal.css';
import teacherRequest from '../../helpers/data/teacherRequest';
import SelectTeacherItem from '../SelectTeacherItem/SelectTeacherItem';

export class StudentPortal extends Component {
  state = {
    students: [],
    teachers: [],
    selectedTeacherId: '',
  }

  getAllTeachers = () => {
    teacherRequest.getAllTeachersRequest().then((teachers) => {
      this.setState({ teachers })
    })
  }

  componentDidMount() {
    this.getAllTeachers();
  }

  selectedTeacher = teacherId => this.setState({ selectedTeacherId: teacherId });


  render() { 
    const { teachers, teacherId } = this.state;

    const teacherItem = teachers.map(teacher => (
      <SelectTeacherItem
        teacher={teacher}
        key={teacher.id}
        selectedTeacher={this.selectedTeacher}
      />
    ));

    return (
      <div className="studentportal container">
        <div className="portal">
          <h1>Student Portal</h1>
          <p>Begin by selecting your teacher!</p>
          <div>
          {teacherItem}
          </div>
          <Link to="/studentSurvey" className="completeSurveyButton"><Button>Daily Survey</Button></Link>
          <Link to="/studentSurveyResponses" className="studentSurveyResponsesButton"><Button>View Previous Surveys</Button></Link>
          <Link to="/studentResources" className="student-resources-button"><Button>Extra Resources</Button></Link>
        </div>
      </div>
    );
  }
}

export default StudentPortal;
