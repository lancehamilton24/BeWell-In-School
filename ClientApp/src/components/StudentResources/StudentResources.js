import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import resourceRequest from '../../helpers/data/resourceRequest';
import { StudentResourceItem } from '../StudentResourceItem/StudentResourceItem';
import './StudentResources.scss';

export class StudentResources extends Component {
  state = {
    currentStudentId: this.props.location.state.selectedStudentId,
    resources: [],
  }

  getResources = () => {
    resourceRequest.getAllResourcesRequest().then((resources) => {
      this.setState({ resources });
    });
  }

  componentDidMount() {
    this.getResources();
  }


  render() {
    const { resources, currentStudentId } = this.state;

    const resourceItem = resources.map(resource => (
      <StudentResourceItem
        resources={resource}
        key={resource.id}
      />
    ));

    return (
      <div>
        <Link to={{
          pathname: "/studentPortal",
          state: {
            currentStudentId: currentStudentId
          }
        }}
        >
          <Button>Back To Student Portal</Button>
        </Link>
        <div className="resources container">
          {resourceItem}
        </div>
      </div>
    );
  }
}

export default StudentResources;
