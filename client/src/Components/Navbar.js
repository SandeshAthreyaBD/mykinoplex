import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import Searchbar from "./Searchbar";

class NavbarPage extends Component {
  state = {
    isOpen: false,
    showModal: false
  };
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  lanchModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };
  render() {
    return (
      <MDBNavbar fixed="top" color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">MyKinoPlex</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <Searchbar />
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink exact to="/">
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <span className="mr-2">Languages</span>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem>
                  <MDBNavLink className="black-text" to="/kannada">
                    Kannada
                  </MDBNavLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBNavLink className="black-text" to="/hindi">
                    Hindi
                  </MDBNavLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBNavLink className="black-text" to="/telugu">
                    Telugu
                  </MDBNavLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBNavLink className="black-text" to="/tamil">
                    Tamil
                  </MDBNavLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBNavLink className="black-text" to="/malayalam">
                    Malayalam
                  </MDBNavLink>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <MDBNavItem>
              <MDBNavLink to="/contact">Contact</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
