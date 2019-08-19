import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import teacherRequest from '../../helpers/data/teacherRequest';
import SelectTeacherItem from '../SelectTeacherItem/SelectTeacherItem';

export class SelectTeacher extends Component {
  state = { 
    teachers: [],
    selectedTeacherId: '',
  }

  getAllTeachers = () => {
    teacherRequest.getAllTeachersRequest().then((teachers) => {
      this.setState({ teachers })
    })
  }

  componentDidMount() {
    this.getAllTeachers();
  }

  // selectedTeacher = teacherId => {
  //   this.setState({ selectedTeacherId: teacherId })
  //   studentRequest.getStudentsByTeacher(teacherId).then((students) => {
  //     this.setState({ students });
  //     this.setState({ teachers: [] })
  //   })
  // }



  render() {
    const { teachers } = this.state;

    const teacherItem = teachers.map(teacher => (
      <SelectTeacherItem
        teacher={teacher}
        key={teacher.id}
        // selectedTeacher={this.selectedTeacher}
      />
    ));

    return (
      <div className="studentportal container">
        <div className="portal">
          <h1>Student Portal</h1>
          <p>Please select your teacher and your name</p>
          <div>
            {teacherItem}
          </div>
        </div>
      </div>
    );
  }
}

export default SelectTeacher;
