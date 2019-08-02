import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class SelectStudentItem extends Component {
  showId = () => {
    const { student, selectStudent } = this.props;
    console.log(student.id);
    selectStudent(student.id)
  }

  render() {
    const { student } = this.props;
    console.log(student);

    return (
      <div>
        <Button onClick={this.showId}>{student.firstName} {student.lastName}</Button>
      </div>
    );
  }
}

export default SelectStudentItem;
