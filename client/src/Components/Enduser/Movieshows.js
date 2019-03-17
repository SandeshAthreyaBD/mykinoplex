import React from "react";
import "../../Styles/Movieshows.css";
// eslint-disable-next-line
import { Card, Button } from "react-bootstrap";
import { MDBContainer } from "mdbreact";
import Slider from "react-slick";

const Movieshows = ({ shows }) => {
  var settings = {
    // slidesPerRow: 4,
    arrows: true,

    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <MDBContainer>
      <Slider {...settings}>
        {shows.map(show => {
          return (
            <div>
              <Card
                border="dark"
                style={{ backgroundColor: "#212121", width: "14rem" }}
                key={show.showId}
              >
                <Card.Body>
                  <Card.Text className="text-center font-weight-bold text-uppercase text-white">
                    <div>
                      <h6 className="cardsubtitle">
                        {show.startTime.toLocaleDateString()}
                      </h6>
                      <h6 className="cardsubtitle">
                        {show.startTime.getHours()} :
                        {" " + show.startTime.getMinutes()}
                      </h6>
                      <h6 className="cardsubtitle">
                        {show.theaterName} <br />
                        {show.street}, <br />
                        {show.zipcode}, {" " + show.city}, <br />
                        {show.country} <br />
                      </h6>
                      <Card.Link href={show.bookNowUrl}>Book Now</Card.Link>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Slider>
    </MDBContainer>
  );
};

export default Movieshows;
