import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import teacherRequest from '../../helpers/data/teacherRequest';
import { TeacherDropdownItem } from '../TeacherDropdownItem/TeacherDropdownItem';
import EditSurvey from '../EditSurvey/EditSurvey';

export class TeacherPortal extends Component {
  state = {
    teachers: [],
    dropdownOpen: false,
    teacherId: '',
    teacherName: '',
  }

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  getTeachers = () => {
    teacherRequest.getAllTeachersRequest().then((teachers) => {
      this.setState({ teachers });
    });
  }

  componentDidMount() {
    this.getTeachers();
  }

  selectedTeacher = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ teacherId: value, dropdownOpen: false });
    this.setState({ teacherName: name });
    console.log(value);
    console.log(name);
  }

  selectTeachers = () => {
    this.setState({ teacherName: '' });
  }

  render() {
    const { teachers, teacherName } = this.state;

    const teacherDropDown = teachers.map(teachers => (
      <TeacherDropdownItem
        item={teachers.id}
        teachers={teachers}
        key={teachers.id}
        selectedTeacher={this.selectedTeacher}
      />
    ));


    if (teacherName === '') {
      return (
        <div>
          <h1>Teacher Portal</h1>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Select Teacher Name
        </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>{teacherDropDown}</DropdownItem>
              <DropdownItem divider />
            </DropdownMenu>
          </ButtonDropdown>
        </div>
      );
    }
    return (
      <div>
        <Button color="info" onClick={this.selectTeachers}>Select another user</Button>
        <h1>Teacher Portal</h1>
        <p>Welcome {teacherName}</p>
        <Link to="/editSurvey" className="editSurveyButton">
          <Button>View/Edit Survey</Button>
        </Link>
      </div>
    );
  }
}

export default TeacherPortal;
