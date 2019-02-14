import React from "react";
// eslint-disable-next-line
import { MDBContainer } from "mdbreact";
import { ListGroup } from "react-bootstrap";
import Movieshows from "./Movieshows";

const MovieshowsGrid = () => {
  return (
    <MDBContainer>
      <div className="flex-column no-gutters">
        <div className="flex-column p-2">
            <h4>Berlin</h4>
            <Movieshows />
          </div>
          <div className="flex-column p-2">
            <h4>Frankfurt</h4>
            <Movieshows />
          </div>
          <div className="flex-column p-2">
            <h4>Mannheim</h4>
            <Movieshows />
          </div>
      </div>
    </MDBContainer>
  );
};

export default MovieshowsGrid;
