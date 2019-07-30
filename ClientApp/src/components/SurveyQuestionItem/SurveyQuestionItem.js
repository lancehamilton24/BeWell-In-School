import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './SurveyQuestionItem.css';

export class SurveyQuestionItem extends Component {
  render() {
    const { questions } = this.props;
    console.log(questions);

    return (
      <div className="question-text container">
        <p>{questions.questionText}</p>
        <div className="edit-delete-questions">
        <div className="edit-question">
        <Button><FontAwesomeIcon icon={faPencilAlt} /></Button>
        </div>
        <div className="delete-question">
        <Button><FontAwesomeIcon icon={faTrash} /></Button>
        </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default SurveyQuestionItem;
