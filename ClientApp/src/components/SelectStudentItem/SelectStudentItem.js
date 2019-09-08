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
        <div className="single-student-btn">
          <Link to={{
            pathname: '/studentPortal',
            state: {
              selectedStudentId: this.state.selectedStudentId,
            }
          }}>
            <button className="col s12" onClick={this.showId}><h5>{student.firstName}<br></br>{student.lastName}</h5></button>
          </Link>
        </div>
    );
  }
}

export default SelectStudentItem;
