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
        <div id="login-form">
          <h1 className="text-center">Add Card</h1>
          <form className="form-horizontal col-sm-6 col-sm-offset-3" onSubmit={this.formSubmit}>
            <div className="form-group">
              <label htmlFor="inputName" className=" control-label">
                Question:
                    </label>
              <div className="col-sm-8">
                <input
                  type="name"
                  className="form-control"
                  id="inputEmail"
                  placeholder="First Name"
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
