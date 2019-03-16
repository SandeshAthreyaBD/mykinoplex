import React, { Component } from "react";
import Navbar from "./Navbar";
import MovieDetailComponent from "./MovieDetailComponent";
import Footer from "./Footer";
import MovieshowsGrid from "./MovieshowsGrid";
import IframeComponent from "./IframeComponent";
import { MDBContainer } from "mdbreact";
import Axios from "axios";
import * as constants from "../../Constants";
class MovieInfoPage extends Component {
  // shows fetch - theatreid..
  constructor(props) {
    super(props);

    this.state = {
      movieInfo: new Object(),
      showDetailsArray: [],
      theatersArray: []
    };
    this.getMovieInfoFromDb();
  }

  getMovieInfoFromDb = () => {
    Axios.get(
      constants.URL_TO_USE + "/api/getMovieInfo/" + this.props.match.params.id
    )
      .then(response => {
        this.setState({ movieInfo: response.data });
        let showIds = this.state.movieInfo.showIds;
        return showIds;
      })
      .then(showIds => {
        return Axios.get(
          constants.URL_TO_USE + "/api/getMultipleShowDetailsById",
          {
            params: { showIds: showIds }
          }
        );
      })
      .then(response => {
        this.setState({ showDetailsArray: response.data });
        let theaterIds = [];
        this.state.showDetailsArray.map(show => {
          let theaterId = show.theaterId;
          if (!theaterIds.includes(theaterId)) {
            theaterIds.push(theaterId);
          }
        });
        return theaterIds;
      })
      .then(theaterIds => {
        return Axios.get(
          constants.URL_TO_USE + "/api/getMultipleTheatersById",
          {
            params: { theaterIds: theaterIds }
          }
        );
      })
      .then(response => {
        this.setState({ theatersArray: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if(Object.keys(this.state.movieInfo).length === 0 && this.state.movieInfo.constructor === Object) {
      return (<div/>);
    } 
    else {
    return (
      <div>
        <Navbar />
        {/* <ImageFlex /> */}
        <MDBContainer className="mt-4">
          <MovieDetailComponent movieInfo={this.state.movieInfo} />
          <IframeComponent trailerUrl={this.state.movieInfo.trailerUrl} />
          <MDBContainer className="#1c2a48 mdb-color darken-3">
            <h2
              style={{ color: "White", marginLeft: "350px", marginTop: "20px" }}
            >
              Show Timimgs and Places
            </h2>
          </MDBContainer>
          {this.state.showDetailsArray.length > 0 && 
          this.state.theatersArray.length > 0 ? (
          <MovieshowsGrid
            showDetailsArray={this.state.showDetailsArray}
            theatersArray={this.state.theatersArray}
          />
          ) : <div/>}
        </MDBContainer>
        <Footer />
      </div>
    );
    }
  }
}

export default MovieInfoPage;
