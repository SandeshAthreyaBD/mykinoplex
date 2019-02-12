import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn } from "mdbreact";

class FooterPage extends Component{
  render(){
    return (
      <MDBFooter color="stylish-color-dark" dark expand="md" className="font-small">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="text-center text-md-left mt-1 pb-1">
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
            Subscribe to mykinoplex
            </h6>
            <div className="form-group mb-2">
              <p>
                <input type="email" className="form-control" placeholder="Your e-mail" />
              </p>
              <p>
                <MDBBtn color="primary" size="sm" rounded>Subscribe</MDBBtn>
              </p>
            </div>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              ABOUT
            </h6>
            <p>
              <a href="#!">Blog</a>
            </p>
            <p>
              <a href="/contact">Contact Us</a>
            </p>
            <p>
              <a href="#!">SignIn</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="3" xl="4" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p className="text-nowrap">
              <i className="fa fa-home mr-3 " /> Vereinsstraße 11, 51379 Leverkusen, Germany
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> contact@myKinoplex.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +49 017683000436 
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="3" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Info</h6>
            <p>
              <a href="#!">Terms and Condition</a> 
            </p>
            <p>
              <a href="#!">Privacy policies</a>  
            </p>
            <p>
              <a href="#!">FAQs</a> 
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}All Right Reserved
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-google-plus" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  
          );
    }
}

export default FooterPage;
