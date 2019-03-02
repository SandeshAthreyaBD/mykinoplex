import React from "react";
import { MDBContainer } from "mdbreact";
import Moviecard from "./Moviecard.js";

const MoviecardGrid = ({ moviesList }) => {
  return (
    <MDBContainer
      style={{ backgroundColor: "black" }}
      className="moviecardgrid"
    >
      <div className="row no-gutters">
        {moviesList.map(movie => {
          return <Moviecard movieInfo={movie} key={movie.id} />;
        })}
      </div>
    </MDBContainer>
  );
};

export default MoviecardGrid;
