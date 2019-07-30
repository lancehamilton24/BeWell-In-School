import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import studentRequest from '../../helpers/data/studentRequest';
import { StudentRepositoryItem } from '../StudentRepositoryItem/StudentRepositoryItem';
import './StudentRepository.css';


export class StudentRepository extends Component {
  state = {
    students: [],
  }

  getStudents = () => {
    studentRequest.getAllStudentsRequest().then((students) => {
      this.setState({ students });
    });
  };

  componentDidMount() {
    this.getStudents();
  }

  render() {
    const { students } = this.state;

    const studentList = students.map(student => (
      <StudentRepositoryItem
        students={student}
        key={student.id}
      />
    ));

    return (
      <div className="container">
        <div className="student-repo">
        <Link to="/teacherPortal" className="teacherLink">
        <Button>Back To Teacher Portal</Button>
        </Link>
        <h1>Student Repository</h1>
        <div>{studentList}</div>
        </div>
      </div>
    );
  }
}

export default StudentRepository;
