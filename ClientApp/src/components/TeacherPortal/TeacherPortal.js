import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import teacherRequest from '../../helpers/data/teacherRequest';
import TeacherDropdown from '../TeacherDropdownItem/TeacherDropdownItem';

export class TeacherPortal extends Component {
  state = {
    teachers: {},
  }

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
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

  render() {
    const { teachers } = this.state;
    console.log(teachers);

    const teachersItem = teachers.map(teacher => (
      <TeacherDropdown
        teachers={teachers}
        key={teachers.id}
      />
    ));

    return (
      <div>
       <h1>Teacher Portal</h1>;
       <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Button Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>{teachersItem}</DropdownItem>
          <DropdownItem divider />
        </DropdownMenu>
      </ButtonDropdown>
      </div>
    );
  }
}

export default TeacherPortal;
