import React, { Component } from 'react';

export class QuestionItem extends Component {
  render() {
    const { questions } = this.props;
    console.log(questions);

    return (
      <div>
        <p>{questions.questionText}</p>
      </div>
    );
  }
}

export default QuestionItem;
