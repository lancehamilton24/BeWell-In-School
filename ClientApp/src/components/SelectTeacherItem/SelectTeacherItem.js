import React, { Component } from 'react';
import studentRequest from '../../helpers/data/studentRequest';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import { SelectStudentItem } from '../SelectStudentItem/SelectStudentItem';
import './SelectTeacherItem.scss';

export class SelectTeacherItem extends Component {
  state = {
    students: [],
    teacherId: this.props.teacher.id
  }


  showId = () => {
    const { teacher, selectedTeacher } = this.props;
    console.log(teacher.id);
    selectedTeacher(teacher.id)
  }

  



  render() {
    const { teacher } = this.props;
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
        <div className="teacher-btn">   
        <Link to={{ 
          pathname: '/selectStudent',
           state: { teacherId: this.state.teacherId } 
          }}>
        <button className="col s12" onClick={this.showId}><h5><b>{teacher.firstName}<br></br>{teacher.lastName}</b></h5><p><hr></hr> {teacherGrade()}</p></button>
        </Link>
        </div>
      </div>
    );
  }
}

export default SelectTeacherItem;
