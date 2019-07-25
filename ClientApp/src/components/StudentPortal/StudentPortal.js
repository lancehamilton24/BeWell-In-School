import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import studentRequest from '../../helpers/data/studentRequest';
import './StudentPortal.css';
import SelectStudent from './SelectStudentItem';

export class StudentPortal extends Component {
  state = {
    students: [],
    selectedStudentGrade: [],
    selectedStudent: [],
  }

  getStudents = () => {
    studentRequest.getAllStudentsRequest().then((students) => {
      this.setState({ students });
    });
  }

  componentDidMount() {
    this.getStudents();
  }

  KinderGartenSelect = () => {
    this.setState({ selectedStudentGrade: this.state.students.filter(student => student.studentGrade === 0) });
  }

  FirstGradeSelect = () => {
    this.setState({ selectedStudentGrade: this.state.students.filter(student => student.studentGrade === 1) });
  }

  SecondGradeSelect = () => {
    this.setState({ selectedStudentGrade: this.state.students.filter(student => student.studentGrade === 2) });
  }

  ThirdGradeSelect = () => {
    this.setState({ selectedStudentGrade: this.state.students.filter(student => student.studentGrade === 3) });
  }

  FourthGradeSelect = () => {
    this.setState({ selectedStudentGrade: this.state.students.filter(student => student.studentGrade === 4) });
  }


  render() {
    const { students, selectedStudentGrade } = this.state;
    console.log(selectedStudentGrade);
    console.log(students);
    
    const selectStudentItem = selectedStudentGrade.map(selectedStudent => (
      <div key={selectedStudent.id}>
        <SelectStudent
          selectedStudent={selectedStudent}
        />
      </div>
    ));

    return (

      <div className="studentportal container">
        <div className="portal">
          <h1>Student Portal</h1>
          <Link to="/studentSurvey" className="completeSurveyButton"><Button>Daily Survey</Button></Link>
          <Link to="/studentSurveyResponses" className="studentSurveyResponsesButton"><Button>View Previous Surveys</Button></Link>
          <Link to="/teacherResources" className="teacherResources"><Button>Extra Resources</Button></Link>
        </div>
      </div>
    );
  }
}

export default StudentPortal;
