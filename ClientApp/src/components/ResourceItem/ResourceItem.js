import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export class ResourceItem extends Component {
  render() {
    const { resources } = this.props;
    return (
      <div>
        <h2>{resources.title}</h2>
        <h5>{resources.description}</h5>
        <p>{resources.url}</p>
        <div className="edit-delete-questions">
        <div className="edit-question">
        <Button><FontAwesomeIcon icon={faPencilAlt} /></Button>
        </div>
        <div className="delete-question">
        <Button><FontAwesomeIcon icon={faTrash} /></Button>
        </div>
        </div>
        <hr></hr>
      </div>
    )
  }
}

export default ResourceItem;
