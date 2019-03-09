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

class ListofTheaters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setModal: false,
      SelectedTheaterInfo: {
        id: "",
        TheaterName: "",
        address: { Street: "", City: "", Zipcode: "", Country: "" }
      },
      theaters: [
        {
          id: 0,
          TheaterName: null,
          address: { Street: null, City: null, Zipcode: null, Country: null }
        }
      ]
    };
  }

  componentDidMount = () => {
    this.getTheaterlistfromDB();
  };

  getTheaterlistfromDB = () => {
    Axios.get("http://localhost:3001/api/getTheater")
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

    let currentIds = this.state.theaters.map(theater => theater.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    let newTheater = [...this.state.theaters, this.state.SelectedTheaterInfo];

    this.setState({
      theaters: newTheater
    });
    this.showModal();
    Axios.post("http://localhost:3001/api/insertTheater", {
      theaterId: this.state.theaters.id,
      theaterName: this.state.theaters.TheaterName,
      address: this.state.theaters.address
    });
  };

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
                          id="TheaterName"
                          className="form-control"
                          onChange={this.handleInput}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <label>Street:</label>
                        <input
                          type="text"
                          id="Street"
                          className="form-control"
                          onChange={this.handleInput}
                        />
                      </div>
                      <div className="col-4">
                        <label>PLZ:</label>
                        <input
                          type="text"
                          id="Zipcode"
                          className="form-control"
                          onChange={this.handleInput}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label>City:</label>
                        <input
                          type="text"
                          id="City"
                          className="form-control"
                          onChange={this.handleInput}
                        />
                      </div>
                      <div className="col-6">
                        <label>Country:</label>
                        <input
                          type="text"
                          id="Country"
                          className="form-control"
                          onChange={this.handleInput}
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
                {
                  console.log(this.state.theaters);
                  if (this.state.theaters.id !== null) {
                    return (
                      <TheaterDetails
                        theaterInfo={theater}
                        editorDeleteTheater={this.EditorDeleteTheater}
                        key={theater.id}
                      />
                    );
                  }
                }
              })}
            </div>
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default ListofTheaters;
