import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

class Navbar extends Component {
  state = {
    isOpen: false
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <MDBNavbar color="#1C2331" dark expand="md">
        <MDBNavbarBrand>
          <strong style={{ color: "#2BBBAD", padding: "2px" }}>
            MyKinoPlex
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink
                exact
                to="/"
                style={{ color: "#2BBBAD", fontWeight: "bold" }}
              >
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="/contact"
                style={{ color: "#2BBBAD", fontWeight: "bold" }}
              >
                Contact
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
