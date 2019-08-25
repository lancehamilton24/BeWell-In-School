import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import surveyQuestionRequest from '../../../helpers/data/surveyQuestionRequest';
import { StudentSurveyQuestionItem } from '../../StudentSurveyQuestionItem/StudentSurveyQuestionItem';
import answerRequest from '../../../helpers/data/answerRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export class StudentSurvey extends Component {
  state = {
    questions: [],
    selectedStudentId: this.props.location.state.selectedStudentId,
    selectedStudent: this.props.location.state.selectedStudent,
    answerText: '',
    questionId: '',
    answerId: '',
  }

  getQuestions = () => {
    surveyQuestionRequest.getAllQuestionsRequest().then((questions) => {
      this.setState({ questions })
    })
  }

  componentDidMount() {
    this.getQuestions();
  }

  answerQuestion(event) {
    const questionId = event.currentTarget.id;
    console.log(event.currentTarget)
    this.setState({ questionId })
    const answerText = event.currentTarget.value;
    this.setState({ answerText })
    const thisQuestion = this.state.questions.find(question => question.id == questionId)
    thisQuestion.answerText = answerText;
    console.log(answerText);
    console.log(event.currentTarget)
  }

  formSubmit = () => {
    var today = new Date();
    const createAnswerRequest = {
      StudentId: this.state.selectedStudentId,
      AnswerText: this.state.answerText,
      QuestionId: Number.parseInt(this.state.questionId, 10),
      AnswerDate: today,
    };
    console.log(createAnswerRequest)
    answerRequest.postAnswerRequest(createAnswerRequest);
    alert("Your answer has been successfully submitted");
  }

  render() {
    const { questions, selectedStudentId, selectedStudent } = this.state;

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
        <div className="container">
          <div className="survey">
            {surveyQuestions}
            <Button onClick={this.formSubmit}>Submit</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentSurvey;
