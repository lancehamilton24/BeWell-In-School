import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import teacherRequest from '../../../helpers/data/teacherRequest';
import SelectTeacherItem from '../../SelectTeacherItem/SelectTeacherItem';
import './SelectTeacher.scss';
import Scrollbar from 'react-scrollbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
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
           <Link to="/" className="homeLink">
          <button className="home-btn btn-floating btn-large waves-effect waves-light btn tooltipped" data-tip="Home" data-position="right"><FontAwesomeIcon icon={faHome} /></button>
        </Link>
        <ReactTooltip />
        <div className="select-teacher container">
          <h6><b>Select your teacher's name below</b></h6>
          <div className="portal row">
          <div className="select-teacher-btn">
            {teacherItem}
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectTeacher;
