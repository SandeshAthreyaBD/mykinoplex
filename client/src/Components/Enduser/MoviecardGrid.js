import React from "react";
import { MDBContainer } from "mdbreact";
import Moviecard from "./Moviecard.js";

const MoviecardGrid = ({ moviesList }) => {
  console.log("inside movielist map : ", moviesList.length);

  return (
    <MDBContainer
      style={{ backgroundColor: "#1C2331" }}
      className="moviecardgrid"
    >
      <div className="row no-gutters">
        {moviesList.map(movie => {
          console.log("inside movielist map : ", movie);
          return <Moviecard movieInfo={movie} key={movie.movieId} />;
        })}
      </div>
    </MDBContainer>
  );
};

export default MoviecardGrid;
