import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import surveyQuestionRequest from '../../helpers/data/surveyQuestionRequest';
import { StudentSurveyQuestionItem } from '../StudentSurveyQuestionItem/StudentSurveyQuestionItem';

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

  render() {
    const { questions } = this.state;

    const surveyQuestions = questions.map(question => (
      <StudentSurveyQuestionItem
        questions={question}
        key={question.id}
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
        </div>
      </div>
    );
  }
}

export default StudentSurvey;
