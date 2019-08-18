import React, { Component } from 'react';
import './StudentRepositoryItem.css';

export class StudentRepositoryItem extends Component {
  render() {
    const { student, onClick } = this.props;
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
      <div className="repo-item" onClick={onClick}>
           <div class="row">
      <div class="col s3">{student.firstName}</div>
      <div class="col s3">{student.lastName}</div>
      <div class="col s3">{student.teacherId}</div>
      <div class="col s3">{studentGrade()}</div>
      </div>
        <hr></hr>
      </div>
    );
  }
}

export default StudentRepositoryItem;
