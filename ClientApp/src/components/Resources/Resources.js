import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import resourceRequest from '../../helpers/data/resourceRequest';
import { ResourceItem } from '../ResourceItem/ResourceItem';
import { AddResource } from '../AddResource/AddResource';
import './Resources.css';

export class Resources extends Component {
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
      <div>
        <Link to="/teacherPortal" className="teacherLink">
        <Button>Back To Teacher Portal</Button>
        </Link>
        {/* <h1 className="resources">Teacher Resources</h1> */}
        <div className="resources container">
          <div>
            <AddResource></AddResource>
          </div>
        {resourceItem}
        </div>
      </div>
    );
  }
}

export default Resources;
