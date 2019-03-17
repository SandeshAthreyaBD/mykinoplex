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
      <MDBRow align="center">
        <MDBCol md="6" sm="12" lg="6">
          <img
            resizeMode={"cover"}
            style={{ height: 300 }}
            src={imgsrc}
            className="d-block"
            alt="flex"
          />
        </MDBCol>
        <MDBCol sm="12" md="2" lg="1" />
        <MDBCol align="left" sm="12" md="4" lg="5">
          <h5 className="font-weight-bold input-preserve-whitespace">{movieInfo.movieName}</h5>
          <h6 className="font-weight-bold input-preserve-whitespace">{movieInfo.tagline}</h6>
          <h6 className="font-weight-bold input-preserve-whitespace">{movieInfo.language}</h6>
          <h6 className="font-weight-bold input-preserve-whitespace">{movieInfo.status}</h6>
          <h6 className="font-weight-bold input-preserve-whitespace">{movieInfo.genre}</h6>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <div className="flex-row d-flex mt-2">
          <div className="col" sm="6" md="6" lg="6" xl="6">
            <h6 className="dark-black-text font-weight-bold text-center mt-5">
              Synopsis
            </h6>
            <p className="text-justify input-preserve-whitespace">{movieInfo.synopsis}</p>
          </div>
          <div className="col" sm="6" md="6" lg="6" xl="6" align="center">
            <h6 className="dark-black-text font-weight-bold mt-5">Cast</h6>
            <p className="input-preserve-whitespace">{movieInfo.cast}</p>
          </div>
        </div>
      </MDBRow>
    </MDBContainer>
  );
};

export default MovieDetailComponent;
