import React, { Component } from 'react';
import './StudentPortal.scss';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import studentRequest from '../../helpers/data/studentRequest';


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

  selectGrade = () => {

    this.setState({ students: this.state.students.filter(student => student.studentGrade == 0) });
    console.log(this.selectedGrade);
  }


  render() {
    const { students } = this.state;
    console.log(students);
    
    return (
      <div className="studentportal container">
        <div className="portal">
        <h1>Student Portal</h1>
        <Button onClick={this.selectGrade}>3rd grade</Button>
        <Button onClick={this.selectGrade}>3rd grade</Button>
        <Link to="/studentSurvey" className="completeSurveyButton"><Button>Daily Survey</Button></Link>
        <Link to="/studentSurveyResponses" className="studentSurveyResponsesButton"><Button>View Previous Surveys</Button></Link>
      </div>
      </div>
    );
  }
}

export default StudentPortal;
