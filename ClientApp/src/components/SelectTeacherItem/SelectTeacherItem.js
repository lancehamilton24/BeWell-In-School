import React, { Component } from 'react';
import studentRequest from '../../helpers/data/studentRequest';
import { Button } from 'reactstrap';
import { SelectStudentItem } from '../SelectStudentItem/SelectStudentItem';

export class SelectTeacherItem extends Component {
  state = {
    students: [],
  }


  showId = () => {
    const { teacher, selectedTeacher } = this.props;
    console.log(teacher.id);
    selectedTeacher(teacher.id)
  }

  



  render() {
    const { teacher, student } = this.props;
    const teacherGrade = () => {
      if (teacher.grade === 0) {
          return (
              "Kindergarten"
          )
      }
      if (teacher.grade === 1) {
          return (
              "1st"
          )
      }
      if (teacher.grade === 2) {
          return (
              "2nd"
          )
      }
      if (teacher.grade === 3) {
        return (
            "3rd"
        )
    }
    if (teacher.grade === 4) {
      return (
          "4th"
      )
  }
  }

    return (
      <div>
        <div className="container">
        <div className="row">      
        <Button className="col s12" onClick={this.showId}><p>{teacher.firstName} {teacher.lastName} {teacherGrade()}</p></Button>
        </div>
        </div>
      </div>
    );
  }
}

export default SelectTeacherItem;
