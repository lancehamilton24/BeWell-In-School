import React, { Component } from 'react'
import studentRequest from '../../helpers/data/studentRequest';
import SelectStudentItem from '../SelectStudentItem/SelectStudentItem';
import './SelectStudent.scss';

export class SelectStudent extends Component {
  state = {
    students: [],
    teacherId: this.props.location.state.teacherId,
  }

  selectedStudent = () => {
    const { teacherId } = this.state;

    studentRequest.getStudentsByTeacher(teacherId).then((students) => {
      this.setState({ students });
    })
  }

  componentDidMount() {
    this.selectedStudent();
  }
      

  render() {
    const { students } = this.state;
        const studentItem = students.map(student => (

      <SelectStudentItem
        student={student}
        key={student.id}
        selectedStudent={this.selectedStudent}
        /> 
      ));


    return (
      <div className="select-student">
        <h6>Select your name</h6>
        {studentItem}
      </div>
    )
  }
}

export default SelectStudent
