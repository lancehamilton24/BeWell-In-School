import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import resourceRequest from '../../helpers/data/resourceRequest';
import { ResourceItem } from '../ResourceItem/ResourceItem';
import { AddResource } from '../AddResource/AddResource';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Resources.css';

export class Resources extends Component {
  state = {
    resources: [],
    isEditing: false,
    editId: '-1',
    isHidden: true,
  }

  toggleHidden() {
    this.setState({
      isHidden: false,
    })
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
    const { isEditing, editId } = this.state;
    if (isEditing) {
      resourceRequest.updateResourceRequest(editId, addNewResource)
        .then(() => {
          resourceRequest.getAllResourcesRequest()
            .then((resources) => {
              this.setState({ resources, isEditing: false, editId: '-1' });
            });
        })
        .catch(err => console.error('error with listings post', err));
    } else {
      resourceRequest.postResourceRequest(addNewResource).then(() => {
        this.getResources();
      });
    };
  };

  passResourceToEdit = resourceId => this.setState({ isEditing: true, editId: resourceId });

  deleteOneResource = (resourceId) => {
    resourceRequest.deleteSingleResource(resourceId)
      .then(() => {
        this.getResources();
      })
      .catch(err => console.error('error with delte single', err));
  }

  render() {
    const { resources, isEditing, editId } = this.state;

    const resourceItem = resources.map(resource => (
      <ResourceItem
        resource={resource}
        key={resource.id}
        passResourceToEdit={this.passResourceToEdit}
        deleteOneResource={this.deleteOneResource}
      />
    ));

    return (
      <div>
        <Link to="/teacherPortal" className="teacherLink">
          <a class="btn-floating btn-large waves-effect waves-light red"><FontAwesomeIcon icon={faArrowLeft} /></a>
        </Link>
        <a class="btn-floating btn-large waves-effect waves-light red"><FontAwesomeIcon icon={faPlus} onClick={this.toggleHidden.bind(this)} /></a>
        {/* <h1 className="resources">Teacher Resources</h1> */}
        <div className="resources container">
          <div>
            {!this.state.isHidden && <AddResource isEditing={isEditing} editId={editId} resources={resources} onSubmit={this.formSubmitResources}></AddResource>}
          </div>
          {resourceItem}
        </div>
      </div>
    );
  }
}

export default Resources;
