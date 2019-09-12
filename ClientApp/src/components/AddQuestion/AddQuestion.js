import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import surveyQuestionRequest from '../../helpers/data/surveyQuestionRequest';
import './AddQuestion.scss';

const defaultQuestion = {
  questionText: '',
  questionDate: new Date(),
};

class AddQuestion extends Component {
  state = {
    addNewQuestion: defaultQuestion,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempInfo = { ...this.state.addNewQuestion };
    tempInfo[name] = e.target.value;
    this.setState({ addNewQuestion: tempInfo });
  }

  questionChange = (e) => {
    this.formFieldStringState('questionText', e);
  };

  formSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const surveyInformation = { ...this.state.addNewQuestion };
    onSubmit(surveyInformation);
    this.setState({ addNewQuestion: defaultQuestion });
  }

  componentDidUpdate(prevProps) {
    const { isEditing, editId } = this.props;
    if (prevProps !== this.props && isEditing) {
      surveyQuestionRequest.getSingleQuestion(editId)
        .then((question) => {
          this.setState({ addNewQuestion: question.data });
        })
        .catch(err => console.error('error with getSingleListing', err));
    }
  }


  render() {
    const { addNewQuestion } = this.state;
    const { isEditing } = this.props

    if (isEditing) {
      return (
        <div className="add-question-form">
          <p className="text-center">Edit questionText</p>
          <div class="row">
            <form class="col s12" onSubmit={this.formSubmit}>
              <div class="row">
                <div class="input-field col s6">
                  <input
                    type="text"
                    class="validate"
                    id="inputQuestion"
                    placeholder="Add Survey Question"
                    value={addNewQuestion.questionText}
                    onChange={this.questionChange}
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="btn btn-default col-xs-12"
                onClick={this.formSubmit}
              >
                Add Question
              </Button>
            </form>
          </div>
        </div>
      );
    }
    return (
      <div className="add-question-form">
        <div class="row">
          <form class="col s12" onSubmit={this.formSubmit}>
            <div class="row">
              <div class="input-field col s6">
                <input
                  type="text"
                  class="validate"
                  id="inputQuestion"
                  placeholder="Survey Question"
                  value={addNewQuestion.questionText}
                  onChange={this.questionChange}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="btn btn-default col-xs-12"
              onClick={this.formSubmit}
            >
              Change Question
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddQuestion;
