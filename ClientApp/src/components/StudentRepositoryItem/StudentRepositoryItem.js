import React, { Component } from 'react';
import './StudentRepositoryItem.css';

export class StudentRepositoryItem extends Component {
  render() {
    const { student } = this.props;

    return (
      <div className="repo-item">
           <div class="row">
      <div class="col s3">{student.firstName}</div>
      <div class="col s3">{student.lastName}</div>
      <div class="col s3">{student.teacherId}</div>
      <div class="col s3">{student.studentGrade}</div>
      </div>
        <hr></hr>
      </div>
    );
  }
}

export default StudentRepositoryItem;
