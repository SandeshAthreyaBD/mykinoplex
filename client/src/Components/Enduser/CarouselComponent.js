import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class CarouselComponent extends Component {
  render() {
    return (
      <Carousel
        centerMode
        centerSlidePercentage={50}
        emulateTouch
        showStatus={false}
        showThumbs={false}
        autoPlay
        interval={3000}
        transitionTime={1000}
        infiniteLoop
      >
        <div>
          <img src={require("../../Images/kgf_back.jpg")} />
        </div>
        <div>
          <img src={require("../../Images/kgf_back.jpg")} />
        </div>
        <div>
          <img src={require("../../Images/kgf_back.jpg")} />
        </div>
      </Carousel>
    );
  }
}

export default CarouselComponent;
