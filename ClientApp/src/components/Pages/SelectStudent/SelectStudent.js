import React, { Component } from 'react'
import studentRequest from '../../../helpers/data/studentRequest';
import SelectStudentItem from '../../SelectStudentItem/SelectStudentItem';
import './SelectStudent.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
      <div className="student-select">
        <Link to="/" title="Home" className="homeLink">
          <button className="home-btn btn-floating btn-medium waves-effect waves-light black"><FontAwesomeIcon icon={faHome} /></button>
        </Link>
        <h6>Select your name</h6>
        <div className="select-student container">
          {studentItem}
        </div>
      </div>
    )
  }
}

export default SelectStudent
