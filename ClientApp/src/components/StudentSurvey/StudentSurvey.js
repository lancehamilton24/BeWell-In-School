import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import surveyQuestionRequest from '../../helpers/data/surveyQuestionRequest';
import { StudentSurveyQuestionItem } from '../StudentSurveyQuestionItem/StudentSurveyQuestionItem';
import answerRequest from '../../helpers/data/answerRequest';
import surveyRequest from '../../helpers/data/surveyRequest';

export class StudentSurvey extends Component {
  state = {
    questions: [],
    currentStudentId: this.props.location.state.selectedStudentId,
  }

  getQuestions = () => {
    surveyQuestionRequest.getAllQuestionsRequest().then((questions) => {
      this.setState({ questions })
    })
  }

  componentDidMount() {
    this.getQuestions();
    this.setState({ })
  }

  answerQuestion(event) {
    const questionId = event.currentTarget.id;
    const answerText = event.currentTarget.value;
    const thisQuestion = this.state.questions.find(question => question.id == questionId)
    thisQuestion.answerText = answerText;
    this.setState({ questions: this.state.questions });
    console.log(this.state.questions);
    const addAnswer = {
      QuestionId: event.currentTarget.id,
      StudentId: this.state.currentStudentId,
      AnswerText: event.currentTarget.value
    }
    console.log(addAnswer)
  }

  formSubmit = () => {
    console.log( ...this.state.questions)
    const allAnswers = { ...this.state.questions };
    const addAnswer = {
      QuestionId: allAnswers.id,
      StudentId: this.state.currentStudentId,
      AnswerText: allAnswers.answerText
    }
    answerRequest.postAnswerRequest(addAnswer)
    console.log(addAnswer)
  }

  render() {
    const { questions } = this.state;

    const surveyQuestions = questions.map(question => (
      <StudentSurveyQuestionItem
        questions={question}
        key={question.id}
        addQuestion={this.answerQuestion.bind(this)}
      />
    ));

    return (
      <div>
        <Link to="/studentPortal" className="studentLink">
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
