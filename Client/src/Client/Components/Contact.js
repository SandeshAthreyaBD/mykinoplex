import React, { Component } from "react";
import Navbar from "./Navbar";
import ContactComponent from "./ContactComponent";
import { MDBContainer } from "mdbreact";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ContactComponent />
      </div>
    );
  }
}

export default ContactPage;
