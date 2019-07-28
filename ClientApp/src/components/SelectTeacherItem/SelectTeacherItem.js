import React, { Component } from 'react';

export class SelectTeacherItem extends Component {
  render() {
    const { teachers } = this.props;

    return (
      <div>
        <button>{teachers.firstName} {teachers.lastName}</button>
      </div>
    );
  }
}

export default SelectTeacherItem;
