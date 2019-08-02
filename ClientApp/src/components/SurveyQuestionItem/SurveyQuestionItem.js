import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './SurveyQuestionItem.css';

export class SurveyQuestionItem extends Component {
  deleteQuestionEvent = (e) => {
    e.preventDefault();
    const { deleteOneQuestion, question } = this.props;
    deleteOneQuestion(question.id);
  }

  editQuestionEvent = (e) => {
    e.preventDefault();
    const { passQuestionToEdit, question } = this.props;
    passQuestionToEdit(question.id);
  }

  render() {
    const { question } = this.props;
    console.log(question);

    return (
      <div className="question-text container">
        <p>{question.questionText}</p>
        <div className="edit-delete-questions">
        <div className="edit-question" onClick={this.editQuestionEvent}>
        <Button><FontAwesomeIcon icon={faPencilAlt} /></Button>
        </div>
        <div className="delete-question" onClick={this.deleteQuestionEvent}>
        <Button><FontAwesomeIcon icon={faTrash} /></Button>
        </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default SurveyQuestionItem;
