import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import studentRequest from '../../helpers/data/studentRequest';
import teacherRequest from '../../helpers/data/teacherRequest';
import './StudentPortal.css';
import SelectStudentItem from '../SelectStudentItem/SelectStudentItem';

export class StudentPortal extends Component {
  state = {
    students: [],
    selectedStudentGrade: [],
    selectedTeacherGrade: [],
    selectedStudent: [],
    teachers: [],
  }

  getStudentsAndTeachers = () => {
    studentRequest.getAllStudentsRequest().then((students) => {
      this.setState({ students });
    });
    teacherRequest.getAllTeachersRequest().then((teachers) => {
      this.setState({ teachers });
    });
  }

  componentDidMount() {
    this.getStudentsAndTeachers();
  }

  KinderGartenSelect = () => {
    this.setState({ selectedStudentGrade: this.state.students.filter(student => student.studentGrade === 0) });
    this.setState({ selectedTeacherGrade: this.state.teachers.filter(teacher => teacher.grade === 0) });
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

    const selectStudentItem = selectedStudentGrade.map(student => (
      <SelectStudentItem
      students={student}
        key={students.id}
      />
    ));

    return (

      <div className="studentportal container">
        <div className="portal">
          <h1>Student Portal</h1>
          <div><Button onClick={this.KinderGartenSelect}>K</Button><Button onClick={this.FirstGradeSelect}>1st</Button>
          <Button onClick={this.SecondGradeSelect}>2nd</Button><Button onClick={this.ThirdGradeSelect}>3rd</Button></div>
          {selectStudentItem}
          <Link to="/studentSurvey" className="completeSurveyButton"><Button>Daily Survey</Button></Link>
          <Link to="/studentSurveyResponses" className="studentSurveyResponsesButton"><Button>View Previous Surveys</Button></Link>
          <Link to="/teacherResources" className="teacherResources"><Button>Extra Resources</Button></Link>
        </div>
      </div>
    );
  }
}

export default StudentPortal;
