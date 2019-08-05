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
      <div className="container">
        <Button className="col s6" onClick={this.showId}>{student.firstName} {student.lastName}</Button>
        <hr></hr>
      </div>
    );
  }
}

export default SelectStudentItem;
