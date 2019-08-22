import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
      <div>
        <div className="row">
          <Link to={{
            pathname: '/studentPortal',
            state: {
              selectedStudentId: this.state.selectedStudentId,
            }
          }}>
            <button className="col s3" onClick={this.showId}>{student.firstName} {student.lastName}</button>
          </Link>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default SelectStudentItem;
