import React, { Component } from 'react';
import studentRequest from '../../helpers/data/studentRequest';
import { Button } from 'reactstrap';
import { SelectStudentItem } from '../SelectStudentItem/SelectStudentItem';

export class SelectTeacherItem extends Component {
  state = {
    students: [],
  }

  getStudents = () => {
    studentRequest.getAllStudentsRequest().then((students) => {
      this.setState({ students });
    });
  }

  componentDidMount() {
    this.getStudents();
  }

  showId = () => {
    const { teacher } = this.props;
    console.log(teacher.id);
  }



  render() {
    const { teacher } = this.props;


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
