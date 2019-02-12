import React, { Component } from "react";
import Navbar from "./Navbar";
import CarouselComponent from "./CarouselComponent";
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
      </div>
    );
  }
}
export default Home;
