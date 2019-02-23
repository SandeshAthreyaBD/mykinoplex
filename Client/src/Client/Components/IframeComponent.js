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
          <MDBIframe src="https://www.youtube.com/embed/Nkq5g1eHTtk" />
        </MDBModalBody>
        <MDBModalFooter className="justify-content-center">
          <span className="mr-4">Share the video!</span>
          <MDBBtn tag="a" size="m" floating social="fb">
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
          <MDBBtn tag="a" size="m" floating social="tw">
            <MDBIcon fab icon="twitter" />
          </MDBBtn>
          <MDBBtn tag="a" size="m" floating social="gplus">
            <MDBIcon fab icon="google-plus-g" />
          </MDBBtn>
          <MDBBtn tag="a" size="m" floating social="li">
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
          <MDBBtn
            color="primary"
            outline
            rounded
            floating
            size="md"
            className="ml-4"
            onClick={!this.state.isOpen}
          >
            Stop Video
          </MDBBtn>
        </MDBModalFooter>
      </MDBContainer>
    );
  }
}
export default IframeComponent;
