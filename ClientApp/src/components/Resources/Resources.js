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

  formSubmitResources = (addNewResource) => {
    resourceRequest.postResourceRequest(addNewResource).then(() => {
      this.getResources();
    });
  };

  deleteOneResource = (resourceId) => {
    resourceRequest.deleteSingleResource(resourceId)
      .then(() => {
        this.getResources();
      })
      .catch(err => console.error('error with delte single', err));
  }

  render() {
    const { resources } = this.state;

    const resourceItem = resources.map(resource => (
      <ResourceItem
      resource={resource}
      key={resource.id}
      deleteOneResource={this.deleteOneResource}
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
            <AddResource resources={resources} onSubmit={this.formSubmitResources}></AddResource>
          </div>
        {resourceItem}
        </div>
      </div>
    );
  }
}

export default Resources;
