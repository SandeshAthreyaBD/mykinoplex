import React, { Component } from "react";
import Slider from "react-slick";
import Carousel from 'react-bootstrap/Carousel'
import {StyleRoot} from "radium";
import { MDBContainer } from "mdbreact";
class CarouselComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "50px",
      slidesToShow: 3,
      // focusOnSelect: true,
      // autoplaySpeed: 2000,
      // pauseOnHover: true,
      // autoplay: true,
    };

    return (
            <Slider {...settings}>
            <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src={require("../Images/aquaman.jpg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src={require("../Images/Gully.jpg")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src={require("../Images/kgf.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src={require("../Images/manikarnika.jpg")}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src={require("../Images/uri.jpg")}
            alt="Fifth slide"
          />
        </Carousel.Item>
            </Slider>
    );
  }
}
export default CarouselComponent;
