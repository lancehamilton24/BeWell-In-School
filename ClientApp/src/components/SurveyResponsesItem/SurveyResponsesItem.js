import React, { Component } from 'react'

export class SurveyResponsesItem extends Component {

// testing = () => {
//   const { answers, questions } = this.props
//   for (let {questionId} of answers) {
//     questions.find(x => x.id === questionId);
//   }
//   console.log(questions);
// }


  render() {
    const { answers, questions } = this.props
    console.log(questions)  

    return (
      <div className="">
        <div class="row">
          <div class="col s3"><p>{answers.answerText}</p></div>
          <div class="col s3"><p>{answers.questionId}</p></div>
          <div class="col s3"><p>{answers.answerDate}</p></div>
        </div>
        <hr></hr>
      </div>
    )
  }
}

export default SurveyResponsesItem
