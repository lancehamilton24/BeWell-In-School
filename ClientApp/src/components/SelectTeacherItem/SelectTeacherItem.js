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

    return (
      <div>
        <div>
        <Button onClick={this.showId}><p>{teacher.firstName} {teacher.lastName}</p></Button>
        </div>
      </div>
    );
  }
}

export default SelectTeacherItem;
