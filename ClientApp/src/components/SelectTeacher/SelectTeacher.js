import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export class SelectTeacher extends Component {
  render() {
    return (
      <div>
        <Link to="studentPortal" className="studentLink">
              <Button>Back</Button>
            </Link>
        <p>select teacher</p>
      </div>
    )
  }
}

export default SelectTeacher;
