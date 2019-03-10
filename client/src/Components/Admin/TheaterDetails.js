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
    theaterInfo: { }
  };

  // handleonClick = (e,theaterInfo) =>{
  //         const editorDeleteTheater = this.props.editorDeleteTheater();
  //         console.log(theaterInfo);
  //     }
  handleEdit = () => {
    this.setState({
      editModal: !this.state.editModal
    });

  };

  handleChange = (e) => {
    console.log(e.target);
    this.setState({
      theaterInfo: { ...this.state.theaterInfo, [e.target.id]: e.target.value }
    });
    console.log(this.state.theaterInfo);
  };

  handleSubmit = (e,theaterInfo) => {
    e.preventDefault();
    this.props.onTheaterEdit(theaterInfo);
    
  };
  showModal = () => {
    this.setState({
      editModal: !this.state.editModal
    });
  };

  deleteClick = theaterInfo => {
    if (window.confirm("Do you want to delete this theatre?")) {
      this.props.onTheaterDelete(theaterInfo);
      }
      
  };

  render() {
    this.state.theaterInfo = this.props.theaterInfo;
    return (
      <MDBContainer>
        <Card>
          <CardBody>
            <h6>TheaterName: {this.state.theaterInfo.theaterName}</h6>
            <h6>
              Address: {this.state.theaterInfo.address.street},
              {this.state.theaterInfo.address.city},{this.state.theaterInfo.address.zipcode}
            </h6>
            <h6>Country: {this.state.theaterInfo.address.country}</h6>
            <MDBIcon
              icon="edit"
              className="mr-1 ext-black"
              onClick={() => this.handleEdit()}
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
                        {/* <input
                          
                          defaultValue={this.state.theaterInfo.theaterName}
                          id="theaterName"
                          className="form-control"
                          onChange={this.handleChange}
                        /> */}
                        <input
                          type="text"
                          value={this.state.theaterInfo.theaterName}
                          id="theaterName"
                          className="form-control"
                          onChange={()=> this.handleChange()}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <label>Street:</label>
                        <input
                          type="text"
                          defaultValue={this.state.theaterInfo.address.street}
                          id="street"
                          className="form-control"
                          onChange={()=> this.handleChange()}
                        />
                      </div>
                      <div className="col-4">
                        <label>PLZ:</label>
                        <input
                          type="text"
                          defaultValue={this.state.theaterInfo.address.zipcode}
                          id="zipcode"
                          className="form-control"
                          onChange={()=> this.handleChange()}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>City:</label>
                        <input
                          type="text"
                          defaultValue={this.state.theaterInfo.address.city}
                          id="city"
                          className="form-control"
                          onChange={()=> this.handleChange()}
                        />
                      </div>
                      <div className="col-6">
                        <label>Country:</label>
                        <input
                          type="text"
                          defaultValue={this.state.theaterInfo.address.country}
                          id="country"
                          className="form-control"
                          onChange={()=> this.handleChange()}
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
                <MDBBtn color="primary" onClick={()=>this.handleSubmit(this.state.theaterInfo)}>
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
