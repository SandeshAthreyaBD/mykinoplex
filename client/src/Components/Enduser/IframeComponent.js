import React, { Component } from "react";
import {
  MDBContainer,
  MDBIframe,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBIcon
} from "mdbreact";

const IframeComponent = ({ trailerUrl }) => {
  return (
    <MDBContainer className="text-center">
      <MDBModalBody>
        <MDBIframe src={trailerUrl} width={500} />
      </MDBModalBody>
    </MDBContainer>
  );
};

export default IframeComponent;
