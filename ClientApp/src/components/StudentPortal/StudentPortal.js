import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import studentRequest from '../../helpers/data/studentRequest';
import './StudentPortal.css';

export class StudentPortal extends Component {
  state = {
    students: [],
    selectedGrade: [],
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
    this.setState({ selectedGrade: this.state.students.filter(student => student.studentGrade === 0) });
    // console.log(this.selectedGrade);
  }

  FirstGradeSelect = () => {
    this.setState({ selectedGrade: this.state.students.filter(student => student.studentGrade === 1) });
    // console.log(this.selectedGrade);
  }

  SecondGradeSelect = () => {
    this.setState({ selectedGrade: this.state.students.filter(student => student.studentGrade === 2) });
    // console.log(this.selectedGrade);
  }

  ThirdGradeSelect = () => {
    this.setState({ selectedGrade: this.state.students.filter(student => student.studentGrade === 3) });
    // console.log(this.selectedGrade);
  }

  FourthGradeSelect = () => {
    this.setState({ selectedGrade: this.state.students.filter(student => student.studentGrade === 4) });
    // console.log(this.selectedGrade);
  }


  render() {
    const { students, selectedGrade } = this.state;
    console.log(selectedGrade);
    console.log(students);

    // if (selectedGrade.length === 0) {
      return (

        <div className="studentportal container">
          <div className="portal">
            <h1>Student Portal</h1>
            <Button onClick={this.KinderGartenSelect}>KinderGarten</Button>
            <Button onClick={this.FirstGradeSelect}>First</Button>
            <Button onClick={this.SecondGradeSelect}>Second</Button>
            <Button onClick={this.ThirdGradeSelect}>Third</Button>
            <Button onClick={this.FourthGradeSelect}>Fourth</Button>
          </div>
        </div>
      );
    // }
    // return (

    //   <div className="studentportal container">
    //     <div className="portal">
    //       <h1>Student Portal</h1>
    //       <Link to="/studentSurvey" className="completeSurveyButton"><Button>Daily Survey</Button></Link>
    //       <Link to="/studentSurveyResponses" className="studentSurveyResponsesButton"><Button>View Previous Surveys</Button></Link>
    //     </div>
    //   </div>
    // );
  }
}

export default StudentPortal;
