import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './AddResource.scss';

const defaultResource = {
  title: '',
  description: '',
  url: '',
};

export class AddResource extends Component {
  render() {
    return (
      <div>
        {/* <h4 className="text-center">Current Survey</h4> */}
        <div class="row">
          <form class="col s12" onSubmit={this.formSubmit}>
          <div class="row">
        <div class="input-field col s6">
          <input placeholder="Add Title" id="first_name" type="text" class="validate" />
        </div>
        <div class="input-field col s6">
          <input placeholder="Add Web Address" id="last_name" type="text" class="validate" />
        </div>
      </div>
            <div class="row">
              <div class="input-field col s6">
                <input
                  type="text"
                  class="validate"
                  id="inputQuestion"
                  placeholder="Add Description"
                //   value={addNewQuestion.questionText}
                //   onChange={this.questionChange}
                />
              </div>
            </div>
          </form>
        </div>
        <Button
          type="submit"
          className="btn btn-default col-xs-12"
          // onClick={this.formSubmit}
        >
          Add Resource
                      </Button>
      </div>
    );
  }
}

export default AddResource;
