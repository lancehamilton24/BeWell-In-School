import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export class ResourceItem extends Component {
  deleteResourceEvent = (e) => {
    e.preventDefault();
    const { deleteOneResource, resource } = this.props;
    deleteOneResource(resource.id);
  }

  editResourceEvent = (e) => {
    e.preventDefault();
    const { passResourceToEdit, resource } = this.props;
    passResourceToEdit(resource.id);
  }


  render() {
    const { resource } = this.props;
    return (
      <div>
        <h2>{resource.title}</h2>
        <h5>{resource.description}</h5>
        <a>{resource.url}</a>
        <div className="edit-delete-questions">
        <div className="edit-question" onClick={this.editResourceEvent}>
        <Button><FontAwesomeIcon icon={faPencilAlt} /></Button>
        </div>
        <div className="delete-question" onClick={this.deleteResourceEvent}>
        <Button onClick={this.deleteResourceEvent}><FontAwesomeIcon icon={faTrash} /></Button>
        </div>
        </div>
        <hr></hr>
      </div>
    )
  }
}

export default ResourceItem;
