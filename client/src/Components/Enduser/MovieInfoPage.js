import React, { Component } from "react";
import Navbar from "./Navbar";
import ImageFlex from "./ImageFlexComponent";
import MovieDetailComponent from "./MovieDetailComponent";
import Footer from "./Footer";
import MovieshowsGrid from "./MovieshowsGrid";
import IframeComponent from "./IframeComponent";
import { MDBContainer } from "mdbreact";
import Axios from "axios";

class MovieInfoPage extends Component {
  // shows fetch - theatreid..
  constructor(props) {
    super(props);

    this.state = {
      movieInfo: Object,
      showDetailsArray: [],
      theatersArray: []
    };
  }

  componentDidMount() {
    this.getMovieInfoFromDb();
    let showIds = this.state.movieInfo.showIds;
    this.getShowDetailsFromDb(showIds);
    let theaterIds = Array;
    showDetailsArray.map(show => {
      let theaterId = show.theaterId;
      if (theaterIds.includes(theaterId)) {
        theaterIds.push(theaterId);
      }
    });
    this.getTheaterDetailsFromDb(theaterIds);
  }

  getMovieInfoFromDb = () => {
    Axios.get("http://localhost:3001/api/getMovieInfo/" + props.movieId)
      .then(response => {
        this.setState({ movieInfo: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getShowDetailsFromDb = showIds => {
    Axios.get("http://localhost:3001/api/getMultipleShowDetailsById", {
      data: {
        showIds: showIds
      }
    })
      .then(response => {
        this.setState({ showDetailsArray: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getTheaterDetailsFromDb = theaterIds => {
    Axios.get("http://localhost:3001/api/getMultipleTheatersById", {
      data: {
        theaterIds: theaterIds
      }
    })
      .then(response => {
        this.setState({ theatersArray: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="#e3f2fd blue lighten-5">
        <Navbar />
        {/* <ImageFlex /> */}
        <MDBContainer className="mt-4">
          <MovieDetailComponent movieInfo={this.state.movieinfo} />
          <IframeComponent trailerUrl={this.state.movieInfo.trailerUrl} />
          <MDBContainer className="#1c2a48 mdb-color darken-3">
            <h2
              style={{ color: "White", marginLeft: "350px", marginTop: "20px" }}
            >
              Show Timimgs and Places
            </h2>
          </MDBContainer>
          <MovieshowsGrid
            showDetailsArray={this.state.showDetailsArray}
            theatersArray={this.state.theatersArray}
          />
        </MDBContainer>
        <Footer />
      </div>
    );
  }
}

export default MovieInfoPage;
