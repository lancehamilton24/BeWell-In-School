import React, { Component } from 'react'
import answerRequest from '../../helpers/data/answerRequest';

export class SurveyResponses extends Component {
  state ={
    currentStudentId: this.props.location.state.selectedStudentId,
    answers: []
  }

  getAnswersByStudentId = () => {
    const { currentStudentId } = this.state
    answerRequest.getAnswersByStudentRequest(currentStudentId).then((answers) => {
      this.setState({ answers })
    })
  }

  componentDidMount() {
    this.getAnswersByStudentId();
  }

  render() {
    return (
      <div>
        <h1>survey response</h1>
      </div>
    )
  }
}

export default SurveyResponses
