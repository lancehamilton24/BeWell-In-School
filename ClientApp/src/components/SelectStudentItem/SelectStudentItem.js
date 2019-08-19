import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export class SelectStudentItem extends Component {
  state = {
    selectedStudentId: this.props.student.id,
  }
  showId = () => {
    const { student, selectedStudent } = this.props;
    console.log(student.id);
    selectedStudent(student.id)
  }

  render() {
    const { student } = this.props;
    console.log(student);

    return (
      <div className="container">
        <Link to= {{ 
          pathname: '/studentPortal',
          state: {
            selectedStudentId: this.state.selectedStudentId,
          }
        }}>
        <Button className="col s6" onClick={this.showId}>{student.firstName} {student.lastName}</Button>
        </Link>
        <hr></hr>
      </div>
    );
  }
}

export default SelectStudentItem;
