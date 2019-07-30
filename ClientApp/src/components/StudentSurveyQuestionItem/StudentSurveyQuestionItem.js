import React, { Component } from 'react'

export class StudentSurveyQuestionItem extends Component {
  render() {
    const { questions } = this.props;
    console.log(questions);

    return (
      <div className="question-text container">
        <p>{questions.questionText}</p>
        <hr></hr>
      </div>
    );
  }
}

export default StudentSurveyQuestionItem;
