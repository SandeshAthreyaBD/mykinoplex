import React from "react";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="indigo" dark expand="md" fixed="top">
              <MDBNavbarBrand href="/">
                <strong>MyKinoFlex</strong>
              </MDBNavbarBrand>
              <SearchBar />
              {!this.state.isWideEnough && (
                <MDBNavbarToggler onClick={this.onClick} />
              )}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink exact to="/">
                      Home
                    </MDBNavLink>
                  </MDBNavItem>
                  <Dropdown />
                  <MDBNavItem>
                    <MDBNavLink to="/login">Login</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
        </header>
      </div>
    );
  }
}

export default Navbar;
