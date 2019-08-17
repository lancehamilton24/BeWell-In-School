import React, { Component } from 'react'

export class SurveyResponsesItem extends Component {
  render() {
    const { answers, questions } = this.props
    console.log(answers)

    return (
      <div className="">
        <div class="row">
          <div class="col s3"><p>{answers.answerText}</p></div>
          <div class="col s3"><p>{answers.answerDate}</p></div>
        </div>
        <hr></hr>
      </div>
    )
  }
}

export default SurveyResponsesItem
