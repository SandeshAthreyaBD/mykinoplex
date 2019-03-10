import React from "react";
import "../../Styles/Moviecard.css";
// eslint-disable-next-line
import { Card } from "react-bootstrap";
import TextTruncate from "react-text-truncate";

const Moviecard = ({ movieInfo }) => {
  let cardtitle =
    (movieInfo.tagline !== "" || movieInfo.tagline !== null)
      ? movieInfo.movieName + ": " + movieInfo.tagline
      : movieInfo.movieName;

  //     let imgsrc = "";

  // if(!(Object.entries(movieInfo.posterimage).length === 0 
  // && movieInfo.posterimage.constructor === Object)) {
  //   imgsrc = "data:image/" + movieInfo.posterimage.contentType 
  //               + ";base64," + movieInfo.posterimage.data;
  // }
 
  let moviegenre = movieInfo.genre.toString();

  return (
    <div className="col-12 col-sm-6 col-md-4 px-2 py-3 moviedivcard">
      <Card className="moviecard" href="/movieinfopage">
        <Card.Img
          variant="top"
          src="http"
          style={{ height: "18rem" }}
        />
        <Card.Body>
          <Card.Title className="cardtitle">
            <TextTruncate line={1} truncateText="…" text={cardtitle} />
          </Card.Title>
          <Card.Text>
          <div className="flex-container">
          <h6 className="cardsubtitle">
              {moviegenre} | {movieInfo.language}
            </h6>
            <Card.Link href="/movieinfopage">Book >></Card.Link>
          </div>
            <div>
            <h6 className="cardsubtitle">
              {movieInfo.status}
            </h6>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Moviecard;
