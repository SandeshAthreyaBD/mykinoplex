import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Navbar from "./Navbar";
import "./index.css";

class App extends Component {
  render() {
    return (
      <MDBContainer fluid>
        <Navbar />
      </MDBContainer>
    );
  }
}

export default App;
