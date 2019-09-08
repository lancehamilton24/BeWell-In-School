import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import alertify from 'alertifyjs';
import surveyQuestionRequest from '../../../helpers/data/surveyQuestionRequest';
import { StudentSurveyQuestionItem } from '../../StudentSurveyQuestionItem/StudentSurveyQuestionItem';
import answerRequest from '../../../helpers/data/answerRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import Modal from 'react-responsive-modal';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './StudentSurvey.scss';

export class StudentSurvey extends Component {
  state = {
    questions: [],
    selectedStudentId: this.props.location.state.selectedStudentId,
    selectedStudent: this.props.location.state.selectedStudent,
    answerText: '',
    questionId: '',
    questionText: '',
    answerId: '',
    open: false,
  }

  onOpenModal = (e) => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  getQuestions = () => {
    surveyQuestionRequest.getLatestQuestionRequest().then((questions) => {
      this.setState({ questions })
    })
  }

  componentDidMount() {
    this.getQuestions();
    console.log(this.state.questions)
  }

  answerQuestion(event) {
    const questionId = event.currentTarget.id;
    this.setState({ questionId });
    const questionText = event.currentTarget.name;
    this.setState({ questionText })
    const answerText = event.currentTarget.value;
    this.setState({ answerText })
    const thisQuestion = this.state.questions.find(question => question.id == questionId)
    thisQuestion.answerText = answerText;
  }


  formSubmit = () => {
    var today = new Date();
    const createAnswerRequest = {
      StudentId: this.state.selectedStudentId,
      AnswerText: this.state.answerText,
      QuestionText: this.state.questionText,
      QuestionId: Number.parseInt(this.state.questionId, 10),
      AnswerDate: today,
    };
    answerRequest.postAnswerRequest(createAnswerRequest);
    // alertify.alert("Your answer has been successfully submitted");
  }

  render() {
    const { questions, selectedStudentId, selectedStudent, open } = this.state;

    const surveyQuestions = questions.map(question => (
      <StudentSurveyQuestionItem
        questions={question}
        key={question.id}
        addQuestion={this.answerQuestion.bind(this)}
      />
    ));

    return (
      <div>
         <Link to={{pathname: "/studentPortal", state: { selectedStudentId, selectedStudent } }}>
          <button class="nav-btn btn-floating btn-medium waves-effect waves-light black btn tooltipped" data-tip="Back" data-position="right"><FontAwesomeIcon icon={faArrowLeft} /></button>
        </Link>
        <ReactTooltip />
        <div className="survey-questions container">
        <div className="card survey-title">
        <h3><b>Question of the Day</b></h3>
        </div>
          <div className="survey">
            {surveyQuestions}
            <Modal open={open} onClose={this.onCloseModal}>
              <div>
              <h5>Is this your final answer?</h5>
              <div classname="submit-btns">
                <Button onClick={this.onCloseModal}>No</Button>
                <Link to={{pathname: "/studentPortal", state: { selectedStudentId, selectedStudent } }}>
                <Button onClick={this.formSubmit}>Yes</Button>
                </Link>
              </div>
              </div>
            </Modal>
            <Button onClick={this.onOpenModal}>Submit</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentSurvey;
