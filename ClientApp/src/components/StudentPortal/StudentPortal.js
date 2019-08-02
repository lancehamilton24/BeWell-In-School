import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './StudentPortal.css';

export class StudentPortal extends Component {
  state = {
    students: [],
    teachers: [],
  }


  render() { 

    return (
      <div className="studentportal container">
        <div className="portal">
          <h1>Student Portal</h1>
          <p>Begin by selecting your grade!</p>
          <div><Button onClick={this.KinderGartenSelect}>K</Button><Button onClick={this.FirstGradeSelect}>1st</Button>
            <Button onClick={this.SecondGradeSelect}>2nd</Button><Button onClick={this.ThirdGradeSelect}>3rd</Button></div>
          {/* <Link to="/studentSurvey" className="completeSurveyButton"><Button>Daily Survey</Button></Link>
          <Link to="/studentSurveyResponses" className="studentSurveyResponsesButton"><Button>View Previous Surveys</Button></Link>
          <Link to="/studentResources" className="student-resources-button"><Button>Extra Resources</Button></Link> */}
        </div>
      </div>
    );
  }
}

export default StudentPortal;
