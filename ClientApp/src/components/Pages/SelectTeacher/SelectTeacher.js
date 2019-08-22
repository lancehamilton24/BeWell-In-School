import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import teacherRequest from '../../../helpers/data/teacherRequest';
import SelectTeacherItem from '../../SelectTeacherItem/SelectTeacherItem';
import './SelectTeacher.scss';
import Scrollbar from 'react-scrollbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import 'react-perfect-scrollbar/dist/css/styles.css';

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

  selectedTeacher = teacherId => {
    this.setState({ selectedTeacherId: teacherId })
  }

  render() {
    const { teachers } = this.state;

    const teacherItem = teachers.map(teacher => (
      <SelectTeacherItem
        teacher={teacher}
        key={teacher.id}
        selectedTeacher={this.selectedTeacher}
      />
    ));


    return (
      <div>
        <Link to="/" title="Home" className="homeLink">
          <button className="home-btn btn-floating btn-medium waves-effect waves-light black"><FontAwesomeIcon icon={faHome} /></button>
        </Link>
      <div className="studentportal container">
        <h3>Select your teacher's name below</h3>
        <div className="portal row">
          {/* <h1>Student Portal</h1>
          <p>Please select your teacher</p> */}
          <Scrollbar>
          <div className="select-teacher-btn">
            {teacherItem}
          </div>
          </Scrollbar>
        </div>
      </div>
      </div>
    );
  }
}

export default SelectTeacher;
