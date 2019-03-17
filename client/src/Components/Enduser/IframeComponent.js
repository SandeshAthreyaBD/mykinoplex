import React from "react";
import { MDBContainer, MDBIframe, MDBModalBody } from "mdbreact";

const IframeComponent = ({ trailerUrl }) => {
  return (
    <MDBContainer className="text-center">
      <MDBModalBody>
        <MDBIframe className="mb-0 p-0" src={trailerUrl} />
      </MDBModalBody>
    </MDBContainer>
  );
};

export default IframeComponent;
