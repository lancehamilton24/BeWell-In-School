import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import surveyQuestionRequest from '../../../helpers/data/surveyQuestionRequest';
import { StudentSurveyQuestionItem } from '../../StudentSurveyQuestionItem/StudentSurveyQuestionItem';
import answerRequest from '../../../helpers/data/answerRequest';
import surveyRequest from '../../../helpers/data/surveyRequest';

export class StudentSurvey extends Component {
  state = {
    questions: [],
    currentStudentId: this.props.location.state.selectedStudentId,
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
      StudentId: this.state.currentStudentId,
      AnswerText: this.state.answerText,
      QuestionId: Number.parseInt(this.state.questionId, 10),
      AnswerDate: today,
    };
    console.log(createAnswerRequest)
    answerRequest.postAnswerRequest(createAnswerRequest);
    alert("Your answer has been successfully submitted");
  }

  render() {
    const { questions, currentStudentId } = this.state;

    const surveyQuestions = questions.map(question => (
      <StudentSurveyQuestionItem
        questions={question}
        key={question.id}
        addQuestion={this.answerQuestion.bind(this)}
      />
    ));

    return (
      <div>
        <Link to={{pathname:"/studentPortal", state: { currentStudentId } }} className="studentLink">
          <Button>Back To Student Portal</Button>
        </Link>
        <div className="container">
          <div className="survey">
            {surveyQuestions}
          </div>
          <Button onClick={this.formSubmit}>Submit</Button>
        </div>
      </div>
    );
  }
}

export default StudentSurvey;
