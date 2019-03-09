import React, { Component } from "react";
import {
  MDBContainer,
  CardBody,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBBtn
} from "mdbreact";
import { Card } from "react-bootstrap";
import axios from "axios";

class TheaterDetails extends Component {
  state = {
    editModal: false,
    theaterInfo: {
      id: "",
      TheaterName: "",
      Street: "",
      City: "",
      Zipcode: "",
      Country: ""
    }
  };

  // handleonClick = (e,theaterInfo) =>{
  //         const editorDeleteTheater = this.props.editorDeleteTheater();
  //         console.log(theaterInfo);
  //     }
  handleEdit = theaterInfo => {
    this.setState({
      editModal: !this.state.editModal,
      theaterInfo: theaterInfo
    });
  };
  handleChange = e => {
    this.setState({
      theaterInfo: { ...this.state.theaterInfo, [e.target.id]: e.target.value }
    });
    console.log(this.state.theaterInfo);
  };
  handleSubmit = () => {};
  showModal = () => {
    this.setState({
      editModal: !this.state.editModal
    });
  };

  deleteClick = theaterInfo => {
    if (window.confirm("Do you want to delete this theatre?")) {
      axios.post("http://localhost:3001/api/deleteTheater/${theaterInfo.id}");
      console.log(this.state.theaterInfo);
    }
  };

  render() {
    this.state.theaterInfo = this.props.theaterInfo;
    return (
      <MDBContainer>
        <Card>
          <CardBody>
            <h6>TheaterName: {this.state.theaterInfo.TheaterName}</h6>
            <h6>
              Address: {this.state.theaterInfo.Street},
              {this.state.theaterInfo.City},{this.state.theaterInfo.Zipcode}
            </h6>
            <h6>Country: {this.state.theaterInfo.Country}</h6>
            <MDBIcon
              icon="edit"
              className="mr-1 ext-black"
              onClick={() => this.handleEdit(this.state.theaterInfo)}
            />
            <strong>Edit</strong>
            <MDBModal isOpen={this.state.editModal}>
              <MDBModalHeader>Add New Theater</MDBModalHeader>
              <MDBModalBody>
                <form>
                  <div className="md-form-group ">
                    <div className="row">
                      <div className="col">
                        <label>Theater Name:</label>
                        <input
                          type="text"
                          value={this.state.theaterInfo.TheaterName}
                          id="TheaterName"
                          className="form-control"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <label>Street:</label>
                        <input
                          type="text"
                          value={this.state.theaterInfo.Street}
                          id="Street"
                          className="form-control"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-4">
                        <label>PLZ:</label>
                        <input
                          type="text"
                          value={this.state.theaterInfo.Zipcode}
                          id="Zipcode"
                          className="form-control"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>City:</label>
                        <input
                          type="text"
                          value={this.state.theaterInfo.City}
                          id="City"
                          className="form-control"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label>Country:</label>
                        <input
                          type="text"
                          value={this.state.theaterInfo.Country}
                          id="Country"
                          className="form-control"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="grey" onClick={this.showModal}>
                  Close
                </MDBBtn>
                <MDBBtn color="primary" onClick={this.handleSubmit}>
                  Save
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
            <MDBIcon
              icon="trash"
              onClick={() => this.deleteClick(this.state.theaterInfo)}
              className="ml-2 text-black"
            />
            <strong>Delete</strong>
          </CardBody>
        </Card>
      </MDBContainer>
    );
  }
}

export default TheaterDetails;
