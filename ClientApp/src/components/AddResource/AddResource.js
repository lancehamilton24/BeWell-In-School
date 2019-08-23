import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './AddResource.scss';
import resourceRequest from '../../helpers/data/resourceRequest';

const defaultResource = {
  title: '',
  description: '',
  url: '',
};

export class AddResource extends Component {
  state = {
    addNewResource: defaultResource,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempInfo = { ...this.state.addNewResource };
    tempInfo[name] = e.target.value;
    this.setState({ addNewResource: tempInfo });
  }

  titleChange = (e) => {
    this.formFieldStringState('title', e);
  };

  descriptionChange = (e) => {
    this.formFieldStringState('description', e);
  };

  urlChange = (e) => {
    this.formFieldStringState('url', e);
  };

  formSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const resourceInformation = { ...this.state.addNewResource };
    onSubmit(resourceInformation);
    this.setState({ addNewResource: defaultResource });
  }

  componentDidUpdate(prevProps) {
    const { isEditing, editId } = this.props;
    if (prevProps !== this.props && isEditing) {
      resourceRequest.getSingleResource(editId)
        .then((resource) => {
          this.setState({ addNewResource: resource.data });
        })
        .catch(err => console.error('error with getSingleListing', err));
    }
  }

  render() {
    const { addNewResource } = this.state;
    const { isEditing } = this.props

    if (isEditing) {
      return (
        <div className="add-resource-form">
          <h4 className="text-center">Edit Resource</h4>
          <div class="row">
            <form class="col s12" onSubmit={this.formSubmit}>
              <div class="row">
                <div class="input-field col s6">
                  <input placeholder="Add Title" id="first_name" type="text" class="validate"
                    value={addNewResource.title}
                    onChange={this.titleChange}
                  />
                </div>
                <div class="input-field col s6">
                  <input placeholder="Add Web Address" id="last_name" type="text" class="validate"
                    value={addNewResource.url}
                    onChange={this.urlChange}
                  />
                </div>
              </div>
              <div class="row">
                <div class="input-field col s6">
                  <input
                    type="text"
                    class="validate"
                    id="inputQuestion"
                    placeholder="Add Description"
                    value={addNewResource.description}
                    onChange={this.descriptionChange}
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="btn btn-default col-xs-12"
                onClick={this.formSubmit}
              >
                Add Resource
              </Button>
            </form>
          </div>
        </div>
      )
    }
    return (
      <div className="add-resource-form">
        <h3><ul>Add Resource</ul></h3>
        {/* <h4 className="text-center">Current Survey</h4> */}
        <div class="row">
          <form class="col s12" onSubmit={this.formSubmit}>
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Add Title" id="first_name" type="text" class="validate"
                  value={addNewResource.title}
                  onChange={this.titleChange}
                />
              </div>
              <div class="input-field col s6">
                <input placeholder="Add Web Address" id="last_name" type="text" class="validate"
                  value={addNewResource.url}
                  onChange={this.urlChange}
                />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input
                  type="text"
                  class="validate"
                  id="inputQuestion"
                  placeholder="Add Description"
                  value={addNewResource.description}
                  onChange={this.descriptionChange}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="btn btn-default col-xs-12"
              onClick={this.formSubmit}
            >
              Add Resource
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddResource;
