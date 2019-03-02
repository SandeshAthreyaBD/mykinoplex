import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const SideNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed ">
            
            <MDBListGroup className="list-group-flush">
                <h4 className="font-weight-bold">MYKINOPLEX</h4>
                <NavLink exact={true} to="/createevent" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="plus-circle" className="mr-3"/>
                        Create Events
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/listofevents" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        List of Events
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/listoftheaters" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        List of Theaters
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default SideNavigation;