import React, { Component } from 'react';
import './StudentSurveyQuestionItem.scss';

export class StudentSurveyQuestionItem extends Component {
  formSubmitAnswer = () => {
    const { questions } = this.props;
    console.log(questions);
    const addAnswer = {
      AnswerText: questions.answerText
    }
    console.log(addAnswer)
  };

  render() {
    const { questions, addQuestion } = this.props;

    return (
      <div className="question-text container">
        <h5>{questions.questionText}</h5>
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input id={questions.id} name={questions.questionText} placeholder="Answer" type="text" class="validate" onChange={addQuestion}></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default StudentSurveyQuestionItem;
