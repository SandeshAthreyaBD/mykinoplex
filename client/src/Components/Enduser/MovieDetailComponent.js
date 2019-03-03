import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdbreact";
import "../../index.css";

const MovieDetailComponent = () => {
  return (
     <MDBContainer fluid className="mt-5">
          <MDBRow >
            <MDBCol className="col-4">
              <img 
              resizeMode={'cover'}
              style={{width:300, height: 400}}
              src={require("../../Images/bell.jpg")}
              className="d-block" 
              alt="flex" />
            </MDBCol>
            <MDBCol className="col-8">
              <div className="flex-row d-flex justify-content-around">
                <h5 className="font-weight-bold ">Bell Bottom </h5>
                <div className="col mt-2" sm="6" md="6" lg="6" xl="6">
                  <h6 className="dark-black-text font-weight-bold text-center mt-5">
                    Synopsis
                  </h6>
                  <p className="text-justify">
                    There is a robbery in town and detective Diwakar doesn't have any
                    clue to solve the case. While all his attempts have failed to close
                    the case, a small hint will find him at the helm of solving the
                    mystery. Will he be able to find the culprit?
                  </p>
                </div>
                <div className="col mt-2" sm="6" md="6" lg="6" xl="6" align="center">
                  <h6 className="dark-black-text font-weight-bold mt-5">Cast</h6>
                  <p>
                    Rishab Shetty
                    <br />
                    Haripriya
                    <br />
                    Yograj Bhat
                    <br />
                    Achyuth Prasad <br />
                  </p>
                </div>
              </div>
            </MDBCol>
         </MDBRow>
        </MDBContainer>
  );
};

export default MovieDetailComponent;
