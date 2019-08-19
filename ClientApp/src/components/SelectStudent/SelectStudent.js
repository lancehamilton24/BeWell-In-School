import React, { Component } from 'react'
import studentRequest from '../../helpers/data/studentRequest';

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
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}

export default SelectStudent
