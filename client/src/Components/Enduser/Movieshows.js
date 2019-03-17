import React from "react";
import "../../Styles/Movieshows.css";
// eslint-disable-next-line
import { Card, Button } from "react-bootstrap";
import { MDBContainer } from "mdbreact";
import Slider from "react-slick";

const Movieshows = ({ shows }) => {
  var settings = {
    slidesPerRow: 4,
    arrows: true
  };
  return (
    <MDBContainer>
      <Slider {...settings}>
        {shows.map(show => {
          return (
            <div>
              <Card border="dark" style={{ width: "14rem" }} key={show.showId}>
                <Card.Body>
                  <Card.Text>
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
