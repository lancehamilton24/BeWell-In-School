import React, { Component } from 'react';
import studentRequest from '../../helpers/data/studentRequest';
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

  render() {
    const { students } = this.state;
    const { teachers } = this.props;

    const selectStudentItem = students.map(student => (
      <SelectStudentItem
        students={student}
        key={student.id}
      />
    ));

    return (
      <div>
        <button onClick={this.studentList}>{teachers.firstName} {teachers.lastName}</button>
        <div>
        {selectStudentItem}
        </div>
      </div>
    );
  }
}

export default SelectTeacherItem;
