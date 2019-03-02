import React, { Component } from 'react';
import { MDBNavbar,MDBNavItem,MDBDropdown,MDBCollapse,MDBNavbarToggler,MDBDropdownToggle,MDBNavbarNav, MDBIcon,MDBDropdownItem,MDBDropdownMenu} from 'mdbreact';

class TopNavigation extends Component {
    state = {
        collapseID: ""
      };
      
      toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }));

    render() {
        return (
            <MDBNavbar color="blue-gradient" className="flexible-navbar" light expand="md" scrolling>
                <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                    <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBDropdown >
                            <MDBDropdownToggle nav >
                                <MDBIcon icon="user" className="mr-1 text-white"/><strong className="text-white">Profile</strong>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default" right>
                                <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem></MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;