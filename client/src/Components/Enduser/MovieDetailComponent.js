import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../../index.css";

const MovieDetailComponent = movieInfo => {
  // let imgsrc =
  //   "data:image/" +
  //   movieInfo.backdropimage.contentType +
  //   ";base64," +
  //   movieInfo.backdropimage.data;

  return (
    <MDBContainer fluid className="mt-5">
      <MDBRow>
        <MDBCol className="col-4">
          <img
            resizeMode={"cover"}
            style={{ width: 300, height: 400 }}
            src=""
            className="d-block"
            alt="flex"
          />
        </MDBCol>
        <MDBCol className="col-8">
          <div className="flex-row d-flex justify-content-around">
            <h5 className="font-weight-bold ">{movieInfo.movieName}</h5>
            <h6 className="font-weight-bold ">{movieInfo.tagline}</h6>
            <h6 className="font-weight-bold ">{movieInfo.language}</h6>
            <h6 className="font-weight-bold ">{movieInfo.status}</h6>
            <h6 className="font-weight-bold ">{movieInfo.genre}</h6>
            <div className="col mt-2" sm="6" md="6" lg="6" xl="6">
              <h6 className="dark-black-text font-weight-bold text-center mt-5">
                Synopsis
              </h6>
              <p className="text-justify">{movieInfo.synopsis}</p>
            </div>
            <div
              className="col mt-2"
              sm="6"
              md="6"
              lg="6"
              xl="6"
              align="center"
            >
              <h6 className="dark-black-text font-weight-bold mt-5">Cast</h6>
              <p>{movieInfo.cast}</p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default MovieDetailComponent;
