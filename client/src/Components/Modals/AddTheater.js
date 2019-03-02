import React, { Component } from "react";
import {
    MDBContainer,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter
  } from "mdbreact";

class AddTheater extends Component {
    state = {
        addModal: false,
        TheaterName:null,
        Street:null,
        PLZ:null,
        City:null,
        Country:null
    }

    toggle = () => {
        this.setState({
            addModal: !this.state.addModal
        });
    }
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        });
        console.log("onchange"+ e.target.value);
      }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("onsubmit");
        this.props.addTheater(this.state);
        this.setState({
            addModal: !this.state.addModal
        });
    }
   

render(){
    return(
        <MDBContainer>
            <MDBBtn onClick={this.toggle}>ADD</MDBBtn>
            <MDBModal isOpen={this.state.addModal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>Add New Theater</MDBModalHeader>
                <MDBModalBody>
                    <form>
                        <div className="md-form-group ">
                            <div className="row">
                                <div className="col">
                                    <label>Theater Name:</label>
                                    <input type="text" id="TheaterName" className="form-control" onChange={this.handleChange}/>
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
                    <MDBBtn color="grey" onClick={this.toggle}>Close</MDBBtn>
                    <MDBBtn color="primary" onClick={this.handleSubmit}>Save</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}
}

export default AddTheater;