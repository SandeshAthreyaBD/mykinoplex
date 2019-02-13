import React from "react";
import { MDBContainer } from "mdbreact";
const Heading = () => {
  return (
    <div
      style={{
        backgroundColor: "Black",
        height: "50px",
        display: "inline - block"
      }}
    >
      <MDBContainer className="#1c2a48 mdb-color darken-3">
        <h2 style={{ color: "White", marginLeft: "250px", marginTop: "20px" }}>
          Movies Now Trending ! Book your tickets soon
        </h2>
      </MDBContainer>
    </div>
  );
};

export default Heading;
