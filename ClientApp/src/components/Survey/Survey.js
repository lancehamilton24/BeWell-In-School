import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import surveyQuestionRequest from '../../helpers/data/surveyQuestionRequest';
import { SurveyQuestionItem } from '../SurveyQuestionItem/SurveyQuestionItem';
import './Survey.css';
import AddQuestion from '../AddQuestion/AddQuestion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';

export class Survey extends Component {
  state = {
    questions: [],
    isEditing: false,
    editId: '-1',
    isHidden: true,
  }

  toggleHidden () {
    this.setState({
      isHidden: false,
    })
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
    const { isEditing, editId } = this.state;
    if (isEditing) {
      surveyQuestionRequest.updateQuestionRequest(editId, addNewQuestion)
        .then(() => {
          surveyQuestionRequest.getAllQuestionsRequest()
            .then((questions) => {
              this.setState({ questions, isEditing: false, editId: '-1' });
            });
        })
        .catch(err => console.error('error with listings post', err));
    } else {
    surveyQuestionRequest.postQuestionRequest(addNewQuestion).then(() => {
      this.getQuestions();
    });
  };
};

  passQuestionToEdit = questionId => this.setState({ isEditing: true, editId: questionId });

  deleteOneQuestion = (questionId) => {
    surveyQuestionRequest.deleteSingleQuestion(questionId)
      .then(() => {
        this.getQuestions();
      })
      .catch(err => console.error('error with delte single', err));
  }

  render() {
    const { questions, isEditing,
      editId, } = this.state;


    const surveyQuestions = questions.map(question => (
      <SurveyQuestionItem
        question={question}
        key={question.id}
        passQuestionToEdit={this.passQuestionToEdit}
        deleteOneQuestion={this.deleteOneQuestion}
      />
    ));

    return (
      <div>
        <Link to="/teacherPortal" className="teacherLink">
        <a class="btn-floating btn-large waves-effect waves-light red"><FontAwesomeIcon icon={faArrowLeft}/></a>
        </Link>
        <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.toggleHidden.bind(this)}><FontAwesomeIcon icon={faPlus}/></a>
        <div className="container">
          <div>
          {!this.state.isHidden && <AddQuestion isEditing={isEditing}
            editId={editId} question={questions} onSubmit={this.formSubmitQuestions}></AddQuestion>}
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
