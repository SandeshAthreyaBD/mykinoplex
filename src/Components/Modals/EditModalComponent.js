import React, {Component} from 'react';
import{
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBBtn
}from 'mdbreact';

class EditModalComponent extends Component{

    state={
        openCheck:true

    }
    showModal = () => {
        this.setState({
            openCheck: !this.state.openCheck,
        });
    }
    render(){
        const {openCheck}=this.props;
        this.state.openCheck=openCheck;
        console.log(openCheck);
        return(
            <MDBModal isOpen={this.state.openCheck}>
                <MDBModalHeader >Add New Theater</MDBModalHeader>
                <MDBModalBody>
                    <form>
                        <div className="md-form-group ">
                            <div className="row">
                                <div className="col">
                                    <label>Theater Name:</label>
                                    <input type="text" id="TheaterName"  className="form-control" onChange={this.handleInput}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <label>Street:</label>
                                    <input type="text" id="Street" className="form-control" onChange={this.handleInput}/>
                                </div>
                                <div className="col-4">
                                    <label>PLZ:</label>
                                    <input type="text" id="Zipcode" className="form-control" onChange={this.handleInput}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label>City:</label>
                                    <input type="text" id="City" className="form-control" onChange={this.handleInput}/>
                                </div>
                                <div className="col-6">
                                    <label>Country:</label>
                                    <input type="text" id="Country" className="form-control" onChange={this.handleInput}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="grey" onClick={!this.state.openCheck}>Close</MDBBtn>
                    <MDBBtn color="primary" onClick={this.handleSubmit}>Save</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        )
    }
}
export default EditModalComponent