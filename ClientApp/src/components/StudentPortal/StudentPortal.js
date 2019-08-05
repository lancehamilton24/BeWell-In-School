import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './StudentPortal.css';
import teacherRequest from '../../helpers/data/teacherRequest';
import SelectTeacherItem from '../SelectTeacherItem/SelectTeacherItem';
import studentRequest from '../../helpers/data/studentRequest';
import SelectStudentItem from '../SelectStudentItem/SelectStudentItem';

export class StudentPortal extends Component {
  state = {
    students: [],
    teachers: [],
    selectedTeacherId: '',
    selectedStudentId: '',
    selectedStudent: [],
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
    studentRequest.getStudentsByTeacher(teacherId).then((students) => {
      this.setState({ students });
      this.setState({ teachers: [] })
    })
  }

  selectStudent = studentId => {
    this.setState({ selectedStudentId: studentId });
    studentRequest.getSingleStudent(studentId).then((selectedStudent) => {
      this.setState({ selectedStudent });
    })
  }


  render() {
    const { teachers, selectedStudent, students, selectedStudentId } = this.state;

    const teacherItem = teachers.map(teacher => (
      <SelectTeacherItem
        teacher={teacher}
        key={teacher.id}
        selectedTeacher={this.selectedTeacher}
      />
    ));
    const studentItem = students.map(student => (
      <SelectStudentItem
        student={student}
        key={student.id}
        selectStudent={this.selectStudent}
      />
    ));


    if (selectedStudentId !== '') {
      return (
        <div className="studentportal container">
          <div className="portal">
            <h1>Student Portal</h1>
            <div>
              <h5>Hello!</h5>
              {selectedStudent.firstName} {selectedStudent.lastName}
            </div>
            <Link to={{
                pathname: '/studentsurvey',
                state: { selectedStudent: selectedStudent, 
                         selectedStudentId: selectedStudentId
                        }
            }} className="complete-survey-button"><Button>Daily Survey</Button></Link>
            <Link to="/studentSurveyResponses" className="studentSurveyResponsesButton"><Button>View Previous Surveys</Button></Link>
            <Link to={{
                pathname: '/studentResources',
                state: { selectedStudent: selectedStudent, 
                         selectedStudentId: selectedStudentId
                        }
            }} className="student-resources-button"><Button>Extra Resources</Button></Link>
          </div>
        </div>
      );
    } 
    return (
      <div className="studentportal container">
        <div className="portal">
          <h1>Student Portal</h1>
          <p>Please select your teacher and your name</p>
          <div>
            {teacherItem}
          </div>
          <div>
            {studentItem}
          </div>
        </div>
      </div>
    );
  }
}

export default StudentPortal;
