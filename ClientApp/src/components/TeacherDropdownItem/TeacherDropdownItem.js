import React, { Component } from 'react';
import button from 'bootstrap';

export class TeacherDropdownItem extends Component {

  render() {
    const { teachers } = this.props;

    return (
      <div>
      <button name={teachers.firstName} value={teachers.id} onClick={this.props.selectedTeacher}>{teachers.firstName} {teachers.lastName}</button>
      </div>
    );
  }
}

export default TeacherDropdownItem;
