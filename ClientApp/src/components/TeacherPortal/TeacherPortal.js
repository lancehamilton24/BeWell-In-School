import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import teacherRequest from '../../helpers/data/teacherRequest';
import { TeacherDropdownItem } from '../TeacherDropdownItem/TeacherDropdownItem';

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
    this.setState({ teacherId: value });
    this.setState({ teacherName: name });
    console.log(value);
    console.log(name);
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
          {/* <div>
        <p>{teacherDropDown}</p>
        {/* <h1>{teachersItem}</h1> */}
          {/* </div>  */}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Teacher Portal</h1>
          <p>Welcome {teacherName}</p>
        </div>
      );
    }
  }
}

export default TeacherPortal;
