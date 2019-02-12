import React, { Component } from "react";
import Navbar from "./Navbar";
import CarouselComponent from "./CarouselComponent";
import MoviecardGrid from "./MoviecardGrid";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Some state that goes here
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <CarouselComponent />
        <MoviecardGrid />
      </div>
    );
  }
}
export default Home;
