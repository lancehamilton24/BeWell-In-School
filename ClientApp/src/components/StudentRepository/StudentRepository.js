import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchField from 'react-search-field';
import studentRequest from '../../helpers/data/studentRequest';
import { StudentRepositoryItem } from '../StudentRepositoryItem/StudentRepositoryItem';
import './StudentRepository.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-responsive-modal';


export class StudentRepository extends Component {
  state = {
    students: [],
    filteredStudents: [],
    open: false,
    selectedStudentId: '',
  }

  onOpenModal = (e) => {
    this.setState({ open: true });
  };

  selectStudent = studentId => {
    this.setState({ selectedStudentId: studentId });
    studentRequest.getSingleStudent(studentId).then((selectedStudent) => {
      this.setState({ selectedStudent });
    })
    this.onOpenModal();
  }

  onCloseModal = () => {
    this.setState({ open: false });
  };

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

  render() {
    const { filteredStudents, open, selectedStudentId } = this.state;

    const studentList = filteredStudents.map(student => (
      <StudentRepositoryItem
        student={student}
        selectStudent={this.selectStudent}
        key={student.id}
      />
    ));

    return (
      <div>
        <Link to="/teacherPortal" title="Student Portal" className="teacherLink">
          <a class="btn-floating btn-large waves-effect waves-light red"><FontAwesomeIcon icon={faArrowLeft} /></a>
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
            <div class="row">
              <div class="col s3"><b><p>First Name</p></b></div>
              <div class="col s3"><b><p>Last Name</p></b></div>
              <div class="col s3"><b><p>Teacher</p></b></div>
              <div class="col s3"><b><p>Grade</p></b></div>
            </div>
            <hr></hr>
            <div>{studentList}</div>
            <div>
              <button onClick={this.onOpenModal}>Open modal</button>
              <Modal open={open} onClose={this.onCloseModal} center>
                <h2>Simple centered modal</h2>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentRepository;
