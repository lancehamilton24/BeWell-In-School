import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import surveyQuestionRequest from '../../../helpers/data/surveyQuestionRequest';
import { SurveyQuestionItem } from '../../SurveyQuestionItem/SurveyQuestionItem';
import './Survey.scss';
import AddQuestion from '../../AddQuestion/AddQuestion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip'

export class Survey extends Component {
  state = {
    questions: [],
    isEditing: false,
    editId: '-1',
    isHidden: true,
  }

  toggleHidden() {
    this.setState({
      isHidden: false,
    })
  }

  getQuestions = () => {
    surveyQuestionRequest.getLatestQuestionRequest().then((questions) => {
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
          surveyQuestionRequest.getLatestQuestionRequest()
            .then((questions) => {
              this.setState({ questions, isEditing: false, editId: '-1' });
            });
        })
        .catch(err => console.error('error with listings post', err));
    } else {
      surveyQuestionRequest.postQuestionRequest(addNewQuestion).then(() => {
        this.getQuestions();
      });
      this.setState({ isHidden: true })
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
    if (questions.length === 0) {
      return (
        <div>
          <Link to="/teacherPortal" className="teacherLink">
            <button class="nav-btn btn-floating btn-medium waves-effect waves-light black btn tooltipped" data-tip="Back" data-position="bottom"><FontAwesomeIcon icon={faArrowLeft} /></button>
          </Link>
          <button class="nav-btn btn-floating btn-medium waves-effect waves-light black btn tooltipped" data-tip="Add Question" data-position="right" onClick={this.toggleHidden.bind(this)}><FontAwesomeIcon icon={faPlus} /></button>
          <ReactTooltip />
          <div className="container">
            <div>
              {this.state.isHidden && <AddQuestion
                question={questions} onSubmit={this.formSubmitQuestions}></AddQuestion>}
            </div>
            <div className="survey">
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Link to="/teacherPortal" className="teacherLink">
          <button class="nav-btn btn-floating btn-medium waves-effect waves-light black btn tooltipped" data-tip="Back" data-position="bottom"><FontAwesomeIcon icon={faArrowLeft} /></button>
        </Link>
        <button class="nav-btn btn-floating btn-medium waves-effect waves-light black btn tooltipped" data-tip="Add Question" data-position="right" onClick={this.toggleHidden.bind(this)}><FontAwesomeIcon icon={faPlus} /></button>
        <ReactTooltip />
        <div className="container">
          <div>
            {!this.state.isHidden && <AddQuestion isEditing={isEditing}
              editId={editId} question={questions} onSubmit={this.formSubmitQuestions}></AddQuestion>}
          </div>
          <div className="survey">
            <h3><ul>Current Question</ul></h3>
            {surveyQuestions}
          </div>
        </div>
      </div>
    );
  }
}

export default Survey;
