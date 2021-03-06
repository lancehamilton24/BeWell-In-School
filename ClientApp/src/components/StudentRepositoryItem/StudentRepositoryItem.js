import React, { Component } from 'react';
import './StudentRepositoryItem.css';

export class StudentRepositoryItem extends Component {
  showId = () => {
    const { student, selectStudent } = this.props;
    console.log(student.id);
    selectStudent(student.id)
  }

  render() {
    const { student } = this.props;
    const studentGrade = () => {
      if (student.studentGrade === 0) {
          return (
              "Kindergarten"
          )
      }
      if (student.studentGrade === 1) {
          return (
              "1st"
          )
      }
      if (student.studentGrade === 2) {
          return (
              "2nd"
          )
      }
      if (student.studentGrade === 3) {
        return (
            "3rd"
        )
    }
    if (student.studentGrade === 4) {
      return (
          "4th"
      )
  }
  }

    return (
      <div className="repo-item" onClick={this.showId}>
           <div class="row">
      <div class="col s3">{student.firstName}</div>
      <div class="col s3">{student.lastName}</div>
      <div class="col s3">{student.teacherFirstName} {student.teacherLastName}</div>
      <div class="col s3">{studentGrade()}</div>
      </div>
        <hr></hr>
      </div>
    );
  }
}

export default StudentRepositoryItem;
