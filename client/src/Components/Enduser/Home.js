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
  }

  componentDidMount() {
    this.getMoviesListFromDb();
    // if (!this.state.intervalIsSet) {
    //   let interval = setInterval(this.getDataFromDb, 60000);
    //   this.setState({ intervalIsSet: interval });
    // }
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
    console.log(this.state.moviesList);
    return (
      <div style={{ backgroundColor: "#1C2331" }}>
        <Navbar />
        <CarouselComponent />
        <Heading />
        {this.state.moviesList.length > 0 ? (
          <MoviecardGrid moviesList={this.state.moviesList} />
        ) : null}
        <Footer />
      </div>
    );
  }
}
export default Home;
