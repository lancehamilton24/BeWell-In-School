import React, { Component } from 'react';

export class SelectStudentItem extends Component {
  render() {
    const { students } = this.props;
    console.log(students);

    return (
      <div>
        <p>{students.firstName} {students.lastName}</p>
      </div>
    );
  }
}

export default SelectStudentItem;
