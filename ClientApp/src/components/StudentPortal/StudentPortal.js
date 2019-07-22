import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import studentRequest from '../../helpers/data/studentRequest';

export class StudentPortal extends Component {
  state = {
    students: [],
  }

  // constructor(props) {
  //   super(props);
  //   this.toggle = this.toggle.bind(this);
  // }

  // toggle() {
  //   this.setState({
  //     dropdownOpen: !this.state.dropdownOpen,
  //   });
  // }

  getStudents = () => {
    studentRequest.getAllStudentsRequest().then((students) => {
      this.setState({ students });
    });
  }

  componentDidMount() {
    this.getStudents();
  }

  render() {
    const { students } = this.state;
    console.log(students);

    return (
      <div>
        <h1>Student Portal</h1>
        <Link to="/studentSurvey" className="completeSurveyButton"><Button>Daily Survey</Button></Link>
        <Link to="/studentSurveyResponses" className="studentSurveyResponsesButton"><Button>View Previous Surveys</Button></Link>
      </div>
    );
  }
}

export default StudentPortal;
