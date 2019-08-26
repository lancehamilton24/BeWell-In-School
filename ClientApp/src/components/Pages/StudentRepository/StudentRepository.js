import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchField from 'react-search-field';
import studentRequest from '../../../helpers/data/studentRequest';
import { StudentRepositoryItem } from '../../StudentRepositoryItem/StudentRepositoryItem';
import './StudentRepository.scss';
import answerRequest from '../../../helpers/data/answerRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-responsive-modal';
import ReactTooltip from 'react-tooltip';
import SurveyResponsesItem from '../../SurveyResponsesItem/SurveyResponsesItem';


export class StudentRepository extends Component {
  state = {
    students: [],
    filteredStudents: [],
    open: false,
    selectedStudentId: '',
    answers: [],
  }

  onOpenModal = (e) => {
    this.setState({ open: true });
  };

  selectStudent = studentId => {
    this.setState({ selectedStudentId: studentId });
    studentRequest.getSingleStudent(studentId).then((selectedStudent) => {
      this.setState({ selectedStudent });
    }).then(() => {
      answerRequest.getAnswersByStudentRequest(studentId).then((answers) => {
        this.setState({ answers })
      })
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
    const { filteredStudents, open, answers } = this.state;

    const studentList = filteredStudents.map(student => (
      <StudentRepositoryItem
        student={student}
        selectStudent={this.selectStudent}
        key={student.id}
      />
    ));

    const studentAnswers = answers.map(answer => (
      <SurveyResponsesItem
        answers={answer}
      />
    ));

    return (
      <div>
         <Link to="/teacherPortal" className="teacherLink">
          <button class="nav-btn btn-floating btn-medium waves-effect waves-light black btn tooltipped" data-tip="Back" data-position="right"><FontAwesomeIcon icon={faArrowLeft} /></button>
        </Link>
        <ReactTooltip />
        <div className="container">
        <div className="card student-repo-title">
        <h3><b>Student Repository</b></h3>
        </div>
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
              <Modal open={open} onClose={this.onCloseModal} center>
                <div class="row">
                  <div class="col s3"><p><b>Answer</b></p></div>
                  <div class="col s3"><p><b>Question</b></p></div>
                  <div class="col s3"><p><b>Date Submitted</b></p></div>
                </div>
                <hr></hr>
                {studentAnswers}
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentRepository;
