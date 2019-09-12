import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class StudentResourceItem extends Component {
  render() {
    const { resources } = this.props;
    return (
      <div>
        <h2>{resources.title}</h2>
        <h5>{resources.description}</h5>
        <a href="" target="">{resources.url}</a>
        <hr></hr>
      </div>
    );
  }
}

export default StudentResourceItem;
