import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './SelectStudentItem.scss';

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
        <div className="single-student-btn card">
          <Link to={{
            pathname: '/studentPortal',
            state: {
              selectedStudentId: this.state.selectedStudentId,
            }
          }}>
            <button onClick={this.showId}>{student.firstName} {student.lastName}</button>
          </Link>
        </div>
    );
  }
}

export default SelectStudentItem;
