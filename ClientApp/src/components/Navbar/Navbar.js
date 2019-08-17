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
      <div className="Navbar navbar-dark bg-dark">
          <Navbar expand="md">
            <NavbarBrand to="/" className="navbar-brand center">BeWell in School</NavbarBrand>
            {/* <img className='littlefoot-image' src={Banner} alt='product' /></NavbarBrand> */}
            <NavbarToggler />
            <div className="yes">        
                <Nav className="secondary-navbar-links">
                  <NavItem className="container1">
                    <NavLink tag={RRNavLink} to='/'>
                      HOME
                      </NavLink>
                  </NavItem>
                </Nav>
            </div>
          </Navbar>
        </div>
    );
  }
}

export default  MyNavbar ;
