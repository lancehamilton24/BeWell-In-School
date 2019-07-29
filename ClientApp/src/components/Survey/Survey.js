import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import surveyQuestionRequest from '../../helpers/data/surveyQuestionRequest';
import { QuestionItem } from '../QuestionItem/QuestionItem';
import './Survey.css';

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

  render() {
    const { questions } = this.state;

    const selectTeacherItem = questions.map(question => (
      <QuestionItem
      questions={question}
      key={question.id}
      />
    ));

    return (
      <div className="container">
        <Link to="/teacherPortal" className="teacherLink">
          <Button>Back To Teacher Portal</Button>
        </Link>
        <div className="survey">
        {selectTeacherItem}
        </div>
      </div>
    );
  }
}

export default Survey;
