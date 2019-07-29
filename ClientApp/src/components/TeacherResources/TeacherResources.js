import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './TeacherResources.css';
import resourceRequest from '../../helpers/data/resourceRequest';
import { ResourceItem } from '../ResourceItem/ResourceItem';

export class TeacherResources extends Component {
  state = {
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
    const { resources } = this.state;

    const resourceItem = resources.map(resource => (
      <ResourceItem
      resources={resource}
      key={resource.id}
      />
    ));

    return (
      <div className="container">
        <Link to="/teacherPortal" className="teacherLink">
        <Button>Back To Teacher Portal</Button>
        </Link>
        <div className="resources">
        <h1>Teacher Resources</h1>
        {resourceItem}
        </div>
      </div>
    );
  }
}

export default TeacherResources;
