import React, { Component } from 'react'

export class ResponseItem extends Component {
  render() {
    const { responses } = this.props
    console.log(responses);
    return (
      <div>
        <p>hello</p>
      </div>
    )
  }
}

export default ResponseItem
