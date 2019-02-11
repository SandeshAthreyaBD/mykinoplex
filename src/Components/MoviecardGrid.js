import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Moviecard from "./Moviecard";

const MoviecardGrid = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="4"> 
            <Moviecard/> 
        </MDBCol>
        <MDBCol size="4"> 
            <Moviecard/> 
        </MDBCol>
        <MDBCol size="4"> 
            <Moviecard/> 
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol sm="4"> 
            <Moviecard/> 
        </MDBCol>
        <MDBCol sm="4"> 
            <Moviecard/> 
        </MDBCol>
        <MDBCol sm="4"> 
            <Moviecard/> 
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="4">
            <Moviecard/>
        </MDBCol>
        <MDBCol md="4">
            <Moviecard/>
        </MDBCol>
        <MDBCol md="4">
            <Moviecard/>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol lg="4">
            <Moviecard/>
        </MDBCol>
        <MDBCol lg="4">
            <Moviecard/>
        </MDBCol>
        <MDBCol lg="4">
            <Moviecard/>
        </MDBCol>
      </MDBRow>

      <MDBRow>
      <MDBCol xl="4">
            <Moviecard/>
        </MDBCol>
        <MDBCol xl="4">
            <Moviecard/>
        </MDBCol>
        <MDBCol xl="4">
            <Moviecard/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default MoviecardGrid;