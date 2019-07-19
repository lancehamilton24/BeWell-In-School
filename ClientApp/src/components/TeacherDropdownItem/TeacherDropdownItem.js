import React, { Component } from 'react';

export class TeacherDropdownItem extends Component {
  render() {
    const { teachers } = this.props;

    return (
      <div>
        <p>{teachers.firstName}</p>
      </div>
    );
  }
}

export default TeacherDropdownItem;
