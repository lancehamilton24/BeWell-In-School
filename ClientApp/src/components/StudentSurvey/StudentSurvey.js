import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import surveyQuestionRequest from '../../helpers/data/surveyQuestionRequest';
import { StudentSurveyQuestionItem } from '../StudentSurveyQuestionItem/StudentSurveyQuestionItem';
import answerRequest from '../../helpers/data/answerRequest';

export class StudentSurvey extends Component {
  state = {
    questions: [],
  }

  getQuestions = () => {
    surveyQuestionRequest.getAllQuestionsRequest().then((questions) => {
      this.setState({ questions });
    });
  }

  componentDidMount() {
    this.getQuestions();
  }

  answerQuestion(event) {
    const questionId = event.currentTarget.id;
    const answerText = event.currentTarget.value;
    const thisQuestion = this.state.questions.find(question => question.id == questionId)
    thisQuestion.answerText = answerText;
    this.setState({ questions: this.state.questions });
    console.log(this.state.questions);
  }

  formSubmitAnswers = (addNewAnswer) => {
      answerRequest.postAnswerRequest(addNewAnswer)
  };

  formSubmit = (e) => {
    const { questions } = this.state;
    e.preventDefault();
    const resourceInformation = { ...this.state.questions };
    console.log(resourceInformation)
    this.formSubmitAnswers(resourceInformation);
    this.setState ({ questions });
    console.log(questions);
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
