import React, { Component } from 'react';
import './App.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class NavClass extends Component{
render(){
  if (this.props.isAdminLoggedIn){
  return(
    <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">admin option</NavLink>
              </NavItem>
              <NavItem>
              option2
                <NavLink href="/">GitHub</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
  );
} else{
  return(
    <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Nonadmin Option</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">GitHub</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
  );
}
}
}

export default NavClass;
