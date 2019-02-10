import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

const Dropdown = () => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle nav caret>
        Languages
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Kannada</MDBDropdownItem>
        <MDBDropdownItem>Hindi</MDBDropdownItem>
        <MDBDropdownItem>Telugu</MDBDropdownItem>
        <MDBDropdownItem>Tamil</MDBDropdownItem>
        <MDBDropdownItem>Malayalam</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Dropdown;
