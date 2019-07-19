import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Be Well In School</h1>
        <Button>Student Portal</Button>
        <Button>Teacher Portal</Button>
      </div>
    );
  }
}

export default Home;
