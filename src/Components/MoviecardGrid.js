import React from "react";
// eslint-disable-next-line
import { MDBContainer, MDBRow, MDBCol, MDBCardGroup } from "mdbreact";
// eslint-disable-next-line
import { CardColumns, Col } from "react-bootstrap";
import Moviecard from "./Moviecard.js";

const MoviecardGrid = ({moviesList}) => {

  return (
    <MDBContainer>
      <div className="row no-gutters">
        {
          moviesList.map(movie => {
            return (
              <Moviecard movieInfo={movie} />
            )
          })
        }
      </div>
    </MDBContainer>
  );
}

export default MoviecardGrid;