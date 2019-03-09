import React, { Component } from "react";
import Navbar from "./Navbar";
import CarouselComponent from "./CarouselComponent";
import MoviecardGrid from "./MoviecardGrid";
import Footer from "./Footer";
import Heading from "./Heading";
import IframeComponent from "./IframeComponent";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesList: [ ]
    };
  }

  componentDidMount() {
    this.getMoviesListFromDb();

    console.log("From frontend" + this.state.moviesList);
    // if (!this.state.intervalIsSet) {
    //   let interval = setInterval(this.getDataFromDb, 60000);
    //   this.setState({ intervalIsSet: interval });
    // }
  }

  getMoviesListFromDb = () => {
    axios.get('http://localhost:3001/api/getAllActiveMovieInfo')
    .then(response => {
      console.log(response);
        this.setState({moviesList: response.data});
    })
    .catch(error => {
        console.log(error);
    }); 
};

  render() {
    return (
      <div
        style={{
          backgroundColor: "Black"
        }}
      >
        <Navbar />
        <CarouselComponent />
        <Heading />
        <MoviecardGrid moviesList={this.state.moviesList} />
        <Footer />
      </div>
    );
  }
}
export default Home;
