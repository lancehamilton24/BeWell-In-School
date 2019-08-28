import React, { Component } from 'react'
import Moment from 'react-moment';
export class SurveyResponsesItem extends Component {

  render() {
    const { answers, questions } = this.props
    console.log(questions)  

    return (
      <div className="">
        <div class="row">
          <div class="col s6"><p>{answers.answerText}</p></div>
          <div class="col s6"><p>{answers.questionText}</p></div>
          <div class="col s6"><p><Moment format="YYYY/MM/DD">{answers.answerDate}</Moment></p></div>
        </div>
        <hr></hr>
      </div>
    )
  }
}

export default SurveyResponsesItem
