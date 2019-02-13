import React, { Component } from "react";
import {
  MDBContainer,
  MDBIframe,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBIcon
} from "mdbreact";
class IframeComponent extends Component {
  state = {
    isOpen: true
  };
  render() {
    return (
      <MDBContainer className="text-center">
        <MDBModalBody>
          <MDBIframe src="https://www.youtube.com/embed/v64KOxKVLVg" />
        </MDBModalBody>
        <MDBModalFooter className="justify-content-center">
          <span className="mr-4">Spread the word!</span>
          <MDBBtn tag="a" size="sm" floating social="fb">
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
          <MDBBtn tag="a" size="sm" floating social="tw">
            <MDBIcon fab icon="twitter" />
          </MDBBtn>
          <MDBBtn tag="a" size="sm" floating social="gplus">
            <MDBIcon fab icon="google-plus-g" />
          </MDBBtn>
          <MDBBtn tag="a" size="sm" floating social="li">
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
          <MDBBtn
            color="primary"
            outline
            rounded
            size="md"
            className="ml-4"
            onClick={!this.state.isOpen}
          >
            Close
          </MDBBtn>
        </MDBModalFooter>
      </MDBContainer>
    );
  }
}
export default IframeComponent;
