import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchField from 'react-search-field';
import studentRequest from '../../helpers/data/studentRequest';
import { StudentRepositoryItem } from '../StudentRepositoryItem/StudentRepositoryItem';
import './StudentRepository.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export class StudentRepository extends Component {
  state = {
    students: [],
    filteredStudents: [],
  }


  getStudents = () => {
    studentRequest.getAllStudentsRequest().then((students) => {
      this.setState({ students });
      this.setState({ filteredStudents: students });
    });
  };

  componentDidMount() {
    this.getStudents();
  }

  onChange = (value, e) => {
    const { students } = this.state;
    const filteredStudents = [];
    e.preventDefault();
    if (!value) {
      this.setState({ filteredStudents: students });
    } else {
      students.forEach((student) => {
        if (student.firstName.toLowerCase().includes(value.toLowerCase())
          || student.lastName.toLowerCase().includes(value.toLowerCase())
          // || student.grade.toLowerCase().includes(value.toLowerCase())
        ) {
          filteredStudents.push(student);
        }
        this.setState({ filteredStudents });
      });
    }
  }

  componentWillUnmount() {

  }

  render() {
    const { filteredStudents } = this.state;

    const studentList = filteredStudents.map(student => (
      <StudentRepositoryItem
        student={student}
        // key={student.id}
      />
    ));

    return (
      <div>
        <Link to="/teacherPortal" className="teacherLink">
        <a class="btn-floating btn-large waves-effect waves-light red"><FontAwesomeIcon icon={faArrowLeft}/></a>
        </Link>
        <div className="container">
        <div className="searchbar">
        <SearchField
          placeholder="Search Students"
          onChange={this.onChange}
          searchText=""
          classNames="searchbar w-100 mt-auto rounded border-warnin"
        />
        </div>
          <div className="student-repo">
            <div>{studentList}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentRepository;
