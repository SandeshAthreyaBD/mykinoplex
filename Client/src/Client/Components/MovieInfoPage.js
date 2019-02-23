import React, { Component } from "react";
import Navbar from "./Navbar";
import ImageFlex from "./ImageFlexComponent";
import MovieDetailComponent from "./MovieDetailComponent";
import Footer from "./Footer";
import MovieshowsGrid from "./MovieshowsGrid";
import IframeComponent from "./IframeComponent";
import { MDBContainer } from "mdbreact";

class MovieInfoPage extends Component {
  render() {
    return (
      <div className="#e3f2fd blue lighten-5">
        <Navbar />
        <ImageFlex />
        <MovieDetailComponent />
        <IframeComponent />
        <MDBContainer className="#1c2a48 mdb-color darken-3">
          <h2
            style={{ color: "White", marginLeft: "350px", marginTop: "20px" }}
          >
            Show Timimgs and Places
          </h2>
        </MDBContainer>
        <MovieshowsGrid />
        <Footer />
      </div>
    );
  }
}

export default MovieInfoPage;
