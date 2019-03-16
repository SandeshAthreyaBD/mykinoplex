import React, { Component } from "react";
import Navbar from "./Navbar";
import CarouselComponent from "./CarouselComponent";
import MoviecardGrid from "./MoviecardGrid";
import Footer from "./Footer";
import Heading from "./Heading";
import axios from "axios";
import * as constants from "../../Constants";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesList: []
    };
    this.getMoviesListFromDb();
  }

  getMoviesListFromDb = () => {
    axios
      .get(constants.URL_TO_USE+"/api/getAllActiveMovieInfo")
      .then(response => {
        this.setState({ moviesList: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#1C2331" }}>
        <Navbar />
        {this.state.moviesList.length > 0 ? (
        <CarouselComponent movieslist={this.state.moviesList}/>
        ) : <div/>}
        <Heading />
        {this.state.moviesList.length > 0 ? (
          <MoviecardGrid moviesList={this.state.moviesList} />
        ) : <div/>}
        <Footer />
      </div>
    );
  }
}
export default Home;
