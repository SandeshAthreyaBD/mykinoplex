import React from 'react';
import "../Styles/Moviecard.css";
// eslint-disable-next-line
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon, MDBRow } from 'mdbreact';

const Moviecard = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "18rem" }}>
        <MDBCardImage className="rounded img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
          waves style={{ height: "18rem" }} />
        <MDBCardBody>
          <MDBCardTitle className="cardtitle">Movie name</MDBCardTitle>
          <MDBCardText className="flex-container">
          <h6 className="cardsubtitle">UA | Kannada</h6>
            <a href="#!" className="card-link d-flex justify-content-end">
              <div>
                Book 
                <MDBIcon icon="angle-double-right" />
              </div>
            </a>
          </MDBCardText>
          {/* <MDBBtn href="#">Book</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Moviecard;