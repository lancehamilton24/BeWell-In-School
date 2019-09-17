import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import resourceRequest from '../../../helpers/data/resourceRequest';
import { StudentResourceItem } from '../../StudentResourceItem/StudentResourceItem';
import './StudentResources.scss';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export class StudentResources extends Component {
  state = {
    selectedStudentId: this.props.location.state.selectedStudentId,
    selectedStudent: this.props.location.state.selectedStudent,
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
    const { resources, selectedStudentId, selectedStudent } = this.state;

    const resourceItem = resources.map(resource => (
      <StudentResourceItem
        resources={resource}
        key={resource.id}
      />
    ));

    return (
      <div>
        <Link to={{pathname: "/studentPortal", state: { selectedStudentId, selectedStudent } }} title="Student Portal" className="teacherLink">
          <button class="nav-btn btn-floating btn-large waves-effect waves-light btn tooltipped" data-tip="Back" data-position="right"><FontAwesomeIcon icon={faArrowLeft} /></button>
        </Link>
        <ReactTooltip />
        <div className="container">
        <div className="resource-title">
        <h3><b>Resources</b></h3>
        </div>
        <div className="resources">
          {resourceItem}
        </div>
        </div>
      </div>
    );
  }
}

export default StudentResources;
