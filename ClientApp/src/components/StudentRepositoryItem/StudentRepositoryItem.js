import React, { Component } from 'react';
import './StudentRepositoryItem.css';

export class StudentRepositoryItem extends Component {
  render() {
    const { students } = this.props;

    return (
      <div className="repo-item">
           <div class="row">
      <div class="col s3">{students.firstName}</div>
      <div class="col s3">{students.lastName}</div>
      <div class="col s3">{students.teacherId}</div>
      <div class="col s3">{students.studentGrade}</div>
      </div>
        <hr></hr>
      </div>
    );
  }
}

export default StudentRepositoryItem;
