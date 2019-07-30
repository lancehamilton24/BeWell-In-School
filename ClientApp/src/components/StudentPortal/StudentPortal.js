import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import studentRequest from '../../helpers/data/studentRequest';
import teacherRequest from '../../helpers/data/teacherRequest';
import './StudentPortal.css';
import SelectStudentItem from '../SelectStudentItem/SelectStudentItem';
import SelectTeacherItem from '../SelectTeacherItem/SelectTeacherItem';

export class StudentPortal extends Component {
  state = {
    selectedStudentTeacher: [],
    selectedTeacherGrade: [],
    selectedStudent: [],
    teachers: [],
  }

  getStudentsAndTeachers = () => {
    teacherRequest.getAllTeachersRequest().then((teachers) => {
      this.setState({ teachers });
    });
  }

  componentDidMount() {
    this.getStudentsAndTeachers();
  }

  TeacherSelect = () => {
    this.setState({ selectedTeacherGrade: this.state.teachers.filter(teacher => teacher.grade === 0) });
  }

  FirstGradeSelect = () => {
    // this.setState({ selectedStudentGrade: this.state.students.filter(student => student.studentGrade === 1) });
    this.setState({ selectedTeacherGrade: this.state.teachers.filter(teacher => teacher.grade === 1) });
  }

  SecondGradeSelect = () => {
    this.setState({ selectedTeacherGrade: this.state.teachers.filter(teacher => teacher.grade === 2) });
  }

  ThirdGradeSelect = () => {
    this.setState({ selectedTeacherGrade: this.state.teachers.filter(teacher => teacher.grade === 3) });
  }

  FourthGradeSelect = () => {
    this.setState({ selectedTeacherGrade: this.state.teachers.filter(teacher => teacher.grade === 4) });
  }

  render() {
    const { students, selectedStudentTeacher, selectedTeacherGrade } = this.state;
    console.log(students);

    const selectTeacherItem = selectedTeacherGrade.map(teacher => (
      <SelectTeacherItem
        teachers={teacher}
        key={teacher.id}
        selectedStudentTeacher={selectedStudentTeacher}
      />
    ));



    if (selectedTeacherGrade.length > 0) {
      return (
        <div className="studentportal container">
          <div className="portal">
            <h1>Student Portal</h1>
            <div><Button onClick={this.KinderGartenSelect}>K</Button><Button onClick={this.FirstGradeSelect}>1st</Button>
              <Button onClick={this.SecondGradeSelect}>2nd</Button><Button onClick={this.ThirdGradeSelect}>3rd</Button></div>
            {selectTeacherItem}
            {/* <Link to="/studentSurvey" className="completeSurveyButton"><Button>Daily Survey</Button></Link>
            <Link to="/studentSurveyResponses" className="studentSurveyResponsesButton"><Button>View Previous Surveys</Button></Link>
            <Link to="/teacherResources" className="teacherResources"><Button>Extra Resources</Button></Link> */}
          </div>
        </div>
      );
    } return (
      <div className="studentportal container">
      <div className="portal">
        <h1>Student Portal</h1>
        <div><Button onClick={this.KinderGartenSelect}>K</Button><Button onClick={this.FirstGradeSelect}>1st</Button>
          <Button onClick={this.SecondGradeSelect}>2nd</Button><Button onClick={this.ThirdGradeSelect}>3rd</Button></div>
          <Link to="/studentSurvey" className="completeSurveyButton"><Button>Daily Survey</Button></Link>
            <Link to="/studentSurveyResponses" className="studentSurveyResponsesButton"><Button>View Previous Surveys</Button></Link>
            <Link to="/teacherResources" className="teacherResources"><Button>Extra Resources</Button></Link>
      </div>
    </div>
    );
  }
}

export default StudentPortal;
