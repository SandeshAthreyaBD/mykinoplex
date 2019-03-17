import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../../Styles/MovieDetail.css";

const MovieDetailComponent = ({ movieInfo }) => {
  let thumb = new Buffer(movieInfo.backdropimage.data.data).toString("base64");
  let imgsrc =
    "data:" + movieInfo.backdropimage.contentType + ";base64," + thumb;

  return (
    <MDBContainer
      // className="flex-row d-flex justify-content-around"
      fluid
      size="12"
      sm="6"
      lg="8"
    >
      <div className="mt-5">
        <MDBRow>
          {/* <MDBCol md="6" sm="12" lg="4"> */}
          <img
            style={{ height: 300 }}
            src={imgsrc}
            className="img-fluid rounded mx-auto"
            alt="aligment"
          />
          {/* </MDBCol> */}
          {/* <MDBCol sm="12" md="2" lg="2" /> */}
          {/* <MDBCol align="left" sm="12" md="4" lg="4" /> */}
        </MDBRow>
      </div>

      <MDBRow className="mt-1">
          <MDBCol className="mt-1" sm="12" md="12" lg="4" xl="4">
            <h5 className="font-weight-bold text-center mt-5">
              <p className="text-white">{movieInfo.movieName}</p>
            </h5>
            <h6 className="font-weight-bold text-center ">
              <p className="text-white">{movieInfo.tagline}</p>
            </h6>
            <h6 className="font-weight-bold text-center ">
              <p className="text-white">{movieInfo.genre + "\t"} : {"\t" + movieInfo.language}</p>
            </h6>
            <h6 className="font-weight-bold text-center ">
              <p className="text-white">{movieInfo.status}</p>
            </h6>
          </MDBCol>
          <MDBCol className=" mt-1" sm="12" md="12" lg="4" xl="4">
            <h6 className="text-white font-weight-bold text-center mt-5">
              Synopsis
            </h6>
            <p className="text-justify text-white">{movieInfo.synopsis}</p>
          </MDBCol>
          <MDBCol className=" mt-1" sm="12" md="12" lg="4" xl="4" align="center">
            <h6 className="text-white font-weight-bold mt-5">Cast</h6>
            <p className="text-white">{movieInfo.cast}</p>
          </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default MovieDetailComponent;
