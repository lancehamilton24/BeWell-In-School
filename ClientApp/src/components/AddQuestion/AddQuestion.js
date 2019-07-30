import React, { Component } from 'react';
import { Button } from 'reactstrap';
import surveyQuestionRequest from '../../helpers/data/surveyQuestionRequest';

const defaultQuestion = {
  questionText: '',
};

class AddQuestion extends Component {
  state = {
    addNewQuestion: defaultQuestion,
  }

  addQuestion = () => {
    const { addNewQuestion } = this.state;
    const addQuestion = {
      QuestionText: addNewQuestion.questionText,
    };
    surveyQuestionRequest.postQuestionRequest(addQuestion);
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


  render() {
    const { addNewQuestion } = this.state;

    return (
      <div>
        {/* <h4 className="text-center">Current Survey</h4> */}
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
          </form>
          <Button
          type="submit"
          className="btn btn-default col-xs-12"
          onClick={this.formSubmit}
        >
          Add Question
                      </Button>
        </div>
      </div>
    );
  }
}

export default AddQuestion;
