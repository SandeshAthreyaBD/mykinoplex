import React, { Component } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import TheaterDetails from "./TheaterDetails";
import Axios from "axios";
import * as constants from "../../Constants";

class ListofTheaters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setModal: false,
      SelectedTheaterInfo: { },
      theaters: [ ]
    };
  }

  componentDidMount = () => {
    this.getTheaterlistfromDB();
  };

  getTheaterlistfromDB = () => {
    Axios.get(constants.URL_TO_USE+"/api/getAllTheaters")
      .then(response => {
        this.setState({ theaters: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleInput = e => {
    this.setState({
      SelectedTheaterInfo: {
        ...this.state.SelectedTheaterInfo,
        [e.target.id]: e.target.value
      }
    });
    console.log(this.state.SelectedTheaterInfo);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.showModal();
    let currentIds = this.state.theaters.map(theater => theater.theaterId);
    let idToBeAdded =1;
    while(currentIds.includes(idToBeAdded)){
      ++idToBeAdded;
    }
    console.log(this.state.SelectedTheaterInfo);
    let address= { 
      street:this.state.SelectedTheaterInfo.street, 
      city: this.state.SelectedTheaterInfo.city, 
      zipcode: this.state.SelectedTheaterInfo.zipcode, 
      country: this.state.SelectedTheaterInfo.country }

    Axios.post(constants.URL_TO_USE+"/api/insertTheater", {
      theaterId: idToBeAdded,
      theaterName: this.state.SelectedTheaterInfo.theaterName,
      address: address
    }).then(res => {
     Axios.get(constants.URL_TO_USE+"/api/getAllTheaters").then(response =>{
     console.log(response.data);  
     this.setState({
         theaters: response.data
       });
     })
    });
  };

  handleDelete = (delTheaterInfo) => {
    Axios.post(constants.URL_TO_USE+"/api/deleteTheater/"+delTheaterInfo.theaterId,{
          theaterId:delTheaterInfo.theaterId
        })
        .then(response=>{
          let updatedTheaters = this.state.theaters.filter(theater =>{
            return theater.theaterId !== delTheaterInfo.theaterId
          });
          this.setState({
            theaters:updatedTheaters
          });
        });
  }
  handleEdit = (editTheaterInfo) => {
    Axios.post(constants.URL_TO_USE+"/api/updateTheater/"+editTheaterInfo.theaterId,{
          theaterId:editTheaterInfo.theaterId,
        theaterName: editTheaterInfo.theaterName,
        address: editTheaterInfo.address
        })
        .then(response=>{
          let updatedTheaters = this.state.theaters.filter(theater =>{
            return theater.theaterId !== editTheaterInfo.theaterId
          });
          this.state.theaters.push(editTheaterInfo);
          this.setState({
            theaters:[...this.state.theaters,updatedTheaters]
          });
        });
  }

  showModal = () => {
    this.setState({
      setModal: !this.state.setModal
    });
  };

  render() {
    return (
      <MDBContainer>
        <div className="row">
          <div className="col-8">
            <MDBInput
              hint="Search Theaters or city"
              type="text"
              containerClass="ml-3"
            />
          </div>
          <div className="col-3 ">
            <MDBBtn onClick={this.showModal}>Add Theater</MDBBtn>

            <MDBModal isOpen={this.state.setModal}>
              <MDBModalHeader>Add New Theater</MDBModalHeader>
              <MDBModalBody>
                <form>
                  <div className="md-form-group ">
                    <div className="row">
                      <div className="col">
                        <label>Theater Name:</label>
                        <input
                          type="text"
                          id="theaterName"
                          className="form-control"
                          onChange={(e)=>this.handleInput(e)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <label>Street:</label>
                        <input
                          type="text"
                          id="street"
                          className="form-control"
                          onChange={(e)=>this.handleInput(e)}
                        />
                      </div>
                      <div className="col-4">
                        <label>PLZ:</label>
                        <input
                          type="text"
                          id="zipcode"
                          className="form-control"
                          onChange={(e)=>this.handleInput(e)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>City:</label>
                        <input
                          type="text"
                          id="city"
                          className="form-control"
                          onChange={(e)=>this.handleInput(e)}
                        />
                      </div>
                      <div className="col-6">
                        <label>Country:</label>
                        <input
                          type="text"
                          id="country"
                          className="form-control"
                          onChange={(e)=>this.handleInput(e)}
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
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              {this.state.theaters.map(theater => {
                    return (
                      <TheaterDetails onTheaterDelete={this.handleDelete}
                        onTheaterEdit={this.handleEdit}
                        theaterInfo={theater}
                        editorDeleteTheater={this.EditorDeleteTheater}
                        key={theater.id}
                      />
                    );
              })}
            </div>
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default ListofTheaters;
