import React, { Component } from 'react'

export class ResourceItem extends Component {
  render() {
    const { resources } = this.props;
    return (
      <div>
        <h2>{resources.title}</h2>
        <h5>{resources.description}</h5>
        <p>{resources.url}</p>
      </div>
    )
  }
}

export default ResourceItem;
