import React from "react";
import { MDBCol } from "mdbreact";

const Searchbar = () => {
  return (
    <MDBCol md="4">
      <div className="active-pink-3 active-pink-4 ml-5">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </MDBCol>
  );
};

export default Searchbar;
