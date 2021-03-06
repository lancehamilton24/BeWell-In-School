import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import resourceRequest from '../../../helpers/data/resourceRequest';
import { ResourceItem } from '../../ResourceItem/ResourceItem';
import { AddResource } from '../../AddResource/AddResource';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import Modal from 'react-responsive-modal';
import './Resources.scss';

export class Resources extends Component {
  state = {
    resources: [],
    isEditing: false,
    editId: '-1',
    isHidden: true,
    open: false,
  }

  onOpenModal = (e) => {
    this.setState({ open: true });
  };

  onCloseModal = (e) => {
    this.setState({ open: false });
  };

  toggleHidden = () => {
    this.onOpenModal();
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
    const { isEditing, editId, open } = this.state;
    if (isEditing) {
      resourceRequest.updateResourceRequest(editId, addNewResource)
        .then(() => {
          resourceRequest.getAllResourcesRequest()
            .then((resources) => {
              this.setState({ resources, isEditing: false, editId: '-1' });
              this.setState({ open: false })
            });
        })
        .catch(err => console.error('error with listings post', err));
    } else {
      resourceRequest.postResourceRequest(addNewResource).then(() => {
        this.getResources();
        this.setState({ open: false })
      });
    //  alert("Your answer has been successfully submitted");
    };
  };

  passResourceToEdit = resourceId => this.setState({ isEditing: true, editId: resourceId, open: true });

  deleteOneResource = (resourceId) => {
    resourceRequest.deleteSingleResource(resourceId)
      .then(() => {
        this.getResources();
      })
      .catch(err => console.error('error with delte single', err));
  }

  render() {
    const { resources, isEditing, editId, open } = this.state;

    const resourceItem = resources.map(resource => (
      <ResourceItem
        resource={resource}
        key={resource.id}
        passResourceToEdit={this.passResourceToEdit}
        deleteOneResource={this.deleteOneResource}
      />
    ));

    if (resources.length === 0) {
      return (
        <div>
          <Link to="/teacherPortal" className="teacherLink">
            <button class="nav-btn btn-floating btn-medium waves-effect waves-light black btn tooltipped" data-tip="Back" data-position="right"><FontAwesomeIcon icon={faArrowLeft} /></button>
          </Link>
          <ReactTooltip />
          <div className="resources">
            <h3><ul>Add Resource</ul></h3>
          </div>
          <div className="add-resources container">
            <div>
             <AddResource isEditing={isEditing} editId={editId} resources={resources} onSubmit={this.formSubmitResources}></AddResource>
            </div>
            {resourceItem}
          </div>
        </div>
      );
    }
    return (
      <div>
        <Link to="/teacherPortal" className="teacherLink">
          <button class="nav-btn btn-floating btn-large waves-effect waves-light btn tooltipped" data-tip="Back" data-position="right"><FontAwesomeIcon icon={faArrowLeft} /></button>
        </Link>
        <button class="nav-btn btn-floating btn-large waves-effect waves-light btn tooltipped" data-tip="Add Resource" data-position="right"><FontAwesomeIcon icon={faPlus} onClick={this.toggleHidden.bind(this)} /></button>
        <ReactTooltip />
        <div className="container">
          <div className="resource-title">
            <h3><b>Student Resources</b></h3>
          </div>
          <Modal open={open} onClose={this.onCloseModal}>
          <div className="add-resource">
            <AddResource isEditing={isEditing} editId={editId} resources={resources} onSubmit={this.formSubmitResources}></AddResource>
          </div>
          </Modal>
          <div className="resources">
            {resourceItem}
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
