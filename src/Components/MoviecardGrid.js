import React from "react";
// eslint-disable-next-line
import { MDBContainer, MDBRow, MDBCol, MDBCardGroup } from "mdbreact";
import Moviecard from "./Moviecard.js";
import { CardDeck } from "react-bootstrap";

const MoviecardGrid = () => {
  return (
    <MDBContainer>
      <CardDeck>
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
        <Moviecard />
</CardDeck>
    </MDBContainer>
  );
}

export default MoviecardGrid;