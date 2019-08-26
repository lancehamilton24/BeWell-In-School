import React, { Component } from 'react';


export class StudentResourceItem extends Component {
  render() {
    const { resources } = this.props;
    return (
      <div>
        <h2>{resources.title}</h2>
        <h5>{resources.description}</h5>
        <a href="">{resources.url}</a>
        <hr></hr>
      </div>
    );
  }
}

export default StudentResourceItem;
