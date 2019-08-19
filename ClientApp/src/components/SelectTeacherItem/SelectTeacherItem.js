import React, { Component } from 'react';
import studentRequest from '../../helpers/data/studentRequest';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import { SelectStudentItem } from '../SelectStudentItem/SelectStudentItem';

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

  //             <Link to={{
//                 pathname: '/studentsurvey',
//                 state: { selectedStudent: selectedStudent, 
//                          selectedStudentId: selectedStudentId
//                         }
//             }} className="complete-survey-button"><Button>Daily Survey</Button></Link>

    return (
      <div>
        <div className="container">
        <div className="row">      
        <Link to={{ 
          pathname: '/selectStudent',
           state: { teacherId: this.state.teacherId } 
          }}>
        <Button className="col s12" onClick={this.showId}><p>{teacher.firstName} {teacher.lastName} {teacherGrade()}</p></Button>
        </Link>
        </div>
        </div>
      </div>
    );
  }
}

export default SelectTeacherItem;
