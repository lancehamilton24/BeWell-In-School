import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  NavItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss';

class MyNavbar extends React.Component {
  render() {
    return (
      <nav>
      <div className="nav-wrapper">
        <a href="#" class="brand-logo center">BeWell in School</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
        </ul>
      </div>
    </nav>
    );
  }
}

export default  MyNavbar ;
