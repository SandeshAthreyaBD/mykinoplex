import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = ({ movieslist }) => {
  return (
    <Carousel
      centerMode
      centerSlidePercentage={50}
      emulateTouch
      showStatus={false}
      showThumbs={false}
      autoPlay
      dynamicHeight
      interval={3000}
      transitionTime={1000}
      infiniteLoop
    >
      {movieslist.map(movieInfo => {
        let thumb = new Buffer(movieInfo.backdropimage.data.data).toString(
          "base64"
        );
        let imgsrc =
          "data:" + movieInfo.backdropimage.contentType + ";base64," + thumb;
        return (
          <div style={{ backgroundColor: "#263238" }}>
            <img
              src={imgsrc}
              alt="movie-backdrop"
              style={{ paddingLeft: "15px" }}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
