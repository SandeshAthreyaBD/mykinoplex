import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBModalHeader,
  MDBInput
} from "mdbreact";
const ContactComponent = () => {
  return (
    <MDBContainer style={{ backgroundColor: "#1C2331" }} fluid>
      <section>
        <h2 className="h2-responsive text-white font-weight-bold text-center">
          Contact us
        </h2>
        <h4 className="text-center text-white w-responsive mx-auto pb-5">
          For more information and queries ,Please reach us through email or
          contact number below
        </h4>
      </section>
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="6" className="lg-0 mb-4">
            <MDBCard className="ml-3">
              <MDBCardBody>
                <MDBModalHeader
                  className="text-center text-white mdb-color"
                  titleClass="w-100"
                  //tag="h5"
                >
                  <h4>
                    <MDBIcon icon="envelope" className="mr-4" />
                    Write to us!
                  </h4>
                </MDBModalHeader>
                {/* <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div> */}
                <div className="md-form">
                  <MDBInput
                    icon="user"
                    label="Your name"
                    iconClass="grey-text"
                    type="text"
                    id="form-name"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="envelope"
                    label="Your email"
                    iconClass="grey-text"
                    type="text"
                    id="form-email"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="tag"
                    label="Subject"
                    iconClass="grey-text"
                    type="text"
                    id="form-subject"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="pencil-alt"
                    label="Your Message"
                    iconClass="grey-text"
                    type="textarea"
                    id="form-text"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn color="mdb-color" rounded>
                    Submit
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="6">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: "400px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.464145526559!2d6.991969550952938!3d51.062981479464234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2c2499f5532b%3A0xaa10ddd277b9611a!2sVereinsstra%C3%9Fe+11%2C+51379+Leverkusen!5e0!3m2!1sen!2sde!4v1549987027615"
                title="This is a unique title"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
            <MDBRow className="text-center">
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="mdb-color" className="accent-1">
                  <MDBIcon icon="map-marker-alt" />
                </MDBBtn>
                <p className="text-white">
                  Vereinsstr. 11 ,51379 Leverkusen, Germany
                </p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="mdb-color" className="accent-1">
                  <MDBIcon icon="phone" />
                </MDBBtn>
                <p className="text-white">+49 017683000436</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="mdb-color" className="accent-1">
                  <MDBIcon icon="envelope" />
                </MDBBtn>
                <p className="text-white">contact@myKinoplex.com</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
};

export default ContactComponent;
