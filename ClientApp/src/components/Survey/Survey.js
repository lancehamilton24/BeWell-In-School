import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import surveyQuestionRequest from '../../helpers/data/surveyQuestionRequest';
import { SurveyQuestionItem } from '../SurveyQuestionItem/SurveyQuestionItem';
import './Survey.css';
import AddQuestion from '../AddQuestion/AddQuestion';

export class Survey extends Component {
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

  formSubmitQuestions = (addNewQuestion) => {
    surveyQuestionRequest.postQuestionRequest(addNewQuestion).then(() => {
      this.getQuestions();
    });
  };

  render() {
    const { questions } = this.state;

    const surveyQuestions = questions.map(question => (
      <SurveyQuestionItem
        questions={question}
        key={question.id}
      />
    ));

    return (
      <div>
        <Link to="/teacherPortal" className="teacherLink">
          <Button>Back To Teacher Portal</Button>
        </Link>
        <div className="container">
          <div>
            <AddQuestion questions={questions} onSubmit={this.formSubmitQuestions}></AddQuestion>
          </div>
          <div className="survey">
            {surveyQuestions}
          </div>
        </div>
      </div>
    );
  }
}

export default Survey;
