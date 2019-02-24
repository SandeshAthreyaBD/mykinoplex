import React, { Component } from "react";
import Recaptcha from "react-recaptcha";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBInput,
  MDBModalFooter
} from "mdbreact";

class Signin extends Component {
  state = {
    modal1: true,
    isVerified: false,
    emailCheck: false,
    passwordCheck: false
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  handleClick = () => {
    if (this.state.isVerified) {
      alert("Implement Admin Dashboard");
    } else {
      alert("Please verify that you are a human");
    }
  };

  recaptchaLoaded = () => {
    console.log("Captcha Successfully Loaded");
  };

  verifyCallback = response => {
    if (response) {
      this.setState({ isVerified: true });
    }
  };

  handleEmail = event => {
    let adminEmailRegx = /iamadmin@mykinoplex.com/gi;
    let adminEmail = event.target.value;
    if (adminEmail === adminEmailRegx.source) {
      this.setState({ ...this.state, emailCheck: true });
    }
  };

  handlePassword = event => {
    let adminPasswordRegx = /yourKinoPlex5678/gi;
    let adminPassword = event.target.value;
    if (adminPassword === adminPasswordRegx.source) {
      this.setState({ ...this.state, passwordCheck: true });
    }
  };

  render() {
    return (
      <MDBContainer>
        {/* <MDBBtn rounded onClick={this.toggle(1)}>
          Launch MDBModal Login Form
        </MDBBtn> */}
        <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)}>
          <MDBModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={this.toggle(1)}
          >
            Admin Sign in
          </MDBModalHeader>
          <MDBModalBody>
            <form className="mx-3 grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChange={this.handleEmail}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                onChange={this.handlePassword}
              />
            </form>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn
              disabled={!this.state.isVerified}
              onClick={this.handleClick}
            >
              Login
            </MDBBtn>
          </MDBModalFooter>
          <MDBModalFooter className="justify-content-center">
            <Recaptcha
              sitekey="6LeSyJAUAAAAADRh8Y9XmwElX5nHXSKOuL7Canx0"
              render="explicit"
              verifyCallback={this.verifyCallback}
              onloadCallback={this.recaptchaLoaded}
              theme="dark"
            />
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default Signin;
