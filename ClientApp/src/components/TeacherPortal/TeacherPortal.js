import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import teacherRequest from '../../helpers/data/teacherRequest';
import { TeacherDropdownItem } from '../TeacherDropdownItem/TeacherDropdownItem';

export class TeacherPortal extends Component {
  state = {
    teachers: [],
    dropdownOpen: false,
    teacherId: '',
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
    console.log(value);
  }

  render() {
    const { teachers } = this.state;

    const teacherDropDown = teachers.map(teachers => (
      <TeacherDropdownItem
        teachers={teachers}
        key={teachers.id}
        selectedTeacher={this.selectedTeacher}
      />
    ));

    return (
      <div>
        <h1>Teacher Portal</h1>;
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
  }
}

export default TeacherPortal;
