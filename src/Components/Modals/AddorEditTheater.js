import React, { Component } from "react";
import {
    MDBContainer,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter
  } from "mdbreact";

class AddorEditTheater extends Component {
    state ={
        //showModal:true,
        Theater:{
            id:null,
            TheaterName:null,
            Street:null,
            Zipcode:null,
            City:null,
            Country:null
        }
        
    }

    setModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        });
      }

    handleSubmit = (e) => {
        e.preventDefault();
        if((this.state.TheaterName !== null) || (this.state.Street !== null) ||(this.state.Zipcode !== null)
        ||(this.state.City !== null) || (this.state.Country !== null))
        {
            this.props.AddEditTheater(this.state);
            this.setState({
                showModal: !this.state.showModal
            });
        }
        else{
            alert("fill all the fields");
        }
        
    }
    render(){
        const theaterInfo = this.props.theaterInfo;
        const setModal = this.props.setModal;
        console.log("setModal:   " + setModal);
        console.log("theaterInfo:   " + theaterInfo);
        return(
            <MDBContainer>
            <MDBModal isOpen={setModal} toggle={setModal}>
                <MDBModalHeader toggle={setModal}>Add New Theater</MDBModalHeader>
                <MDBModalBody>
                    <form>
                        <div className="md-form-group ">
                            <div className="row">
                                <div className="col">
                                    <label>Theater Name:</label>
                                    <input type="text" id="TheaterName"  className="form-control" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <label>Street:</label>
                                    <input type="text" id="Street" className="form-control" onChange={this.handleChange}/>
                                </div>
                                <div className="col-4">
                                    <label>PLZ:</label>
                                    <input type="text" id="PLZ" className="form-control" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label>City:</label>
                                    <input type="text" id="City" className="form-control" onChange={this.handleChange}/>
                                </div>
                                <div className="col-6">
                                    <label>Country:</label>
                                    <input type="text" id="Country" className="form-control" onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="grey" onClick={this.setModal}>Close</MDBBtn>
                    <MDBBtn color="primary" onClick={this.handleSubmit}>Save</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
        )
    }
}

export default AddorEditTheater