import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import resourceRequest from '../../../helpers/data/resourceRequest';
import { StudentResourceItem } from '../../StudentResourceItem/StudentResourceItem';
import './StudentResources.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export class StudentResources extends Component {
  state = {
    currentStudentId: this.props.location.state.selectedStudentId,
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


  render() {
    const { resources, currentStudentId } = this.state;

    const resourceItem = resources.map(resource => (
      <StudentResourceItem
        resources={resource}
        key={resource.id}
      />
    ));

    return (
      <div>
        <Link to={{ pathname: "/studentPortal", state: { currentStudentId } }} title="Student Portal" className="teacherLink">
          <button class="nav-btn btn-floating btn-medium waves-effect waves-light black"><FontAwesomeIcon icon={faArrowLeft} /></button>
        </Link>
        <div className="resources container">
          <h1>Resources</h1>
          {resourceItem}
        </div>
      </div>
    );
  }
}

export default StudentResources;
