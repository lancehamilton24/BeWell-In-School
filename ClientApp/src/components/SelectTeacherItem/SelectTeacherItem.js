import React, { Component } from 'react'

export class SelectTeacherItem extends Component {
  render() {
    const { teachers } = this.props;

    return (
      <div>
        <p>{teachers.firstName} {teachers.lastName}</p>
      </div>
    )
  }
}

export default SelectTeacherItem;
