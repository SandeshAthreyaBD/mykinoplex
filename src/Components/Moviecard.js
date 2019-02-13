import React from "react";
import "../Styles/Moviecard.css";
// eslint-disable-next-line
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
  MDBRow
} from "mdbreact";
import { Card } from "react-bootstrap";
import TextTruncate from "react-text-truncate";

const Moviecard = ({ movieInfo }) => {
  let cardtitle =
    movieInfo.tagline != ""
      ? movieInfo.name + ": " + movieInfo.tagline
      : movieInfo.name;
  return (
    <div className="col-12 col-sm-6 col-md-4 p-2 moviedivcard">
      <Card className="moviecard">
        <Card.Img
          variant="top"
          src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
          waves
          style={{ height: "18rem" }}
        />
        <Card.Body>
          <Card.Title className="cardtitle">
            <TextTruncate line={1} truncateText="…" text={cardtitle} />
          </Card.Title>
          <Card.Text className="flex-container">
            <h6 className="cardsubtitle">
              {movieInfo.certificate} | {movieInfo.language}
            </h6>
            <Card.Link href="#!">Book >></Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Moviecard;
