import React, {Component} from 'react';
import {MDBContainer,MDBInput, MDBBtn, MDBModal,MDBModalBody,MDBModalHeader,MDBModalFooter} from 'mdbreact';
import  TheaterDetails from './TheaterDetails';

class ListofTheaters extends Component{
    constructor(props) {
        super(props);
        this.state = {
            setModal:false,
            SelectedTheaterInfo: {
                id:'',
                TheaterName:'',
                Street:'',
                City:'',
                Zipcode:'',
                Country:''
            },
            theaters: [{
                id:1,
                TheaterName: 'Cinemax',
                Street: 'Markplatz 23',
                City:'Mannheim',
                Zipcode:'69168',
                Country: 'Germany',
            }, {
                id:2,
                TheaterName: 'Cineplex',
                Address: 'Markplatz 23,',
                City:'Mannheim',
                PLZ:'69168',
                Country: 'Germany',
            }, {
                id:3,
                TheaterName: 'Lakshmi',
                Street: 'Markplatz 23.',
                City:'Mannheim',
                PLZ:'69168',
                Country: 'Germany',
            }, {
                id:4,
                TheaterName: 'KinoPlex',
                Street: 'Markplatz 23,',
                City:'Mannheim',
                Zipcode:'69168',
                Country: 'Germany',
                
            }],
        };

    }

handleInput = (e) => {
    this.setState({ 
      SelectedTheaterInfo:{...this.state.SelectedTheaterInfo,
          [e.target.id]: e.target.value}
    });
    console.log(this.state.SelectedTheaterInfo);

  }

handleSubmit = (e) => {
    e.preventDefault();
        let count =this.state.theaters.length;
        this.state.SelectedTheaterInfo.id = count + 1;
        let newTheater = [...this.state.theaters,this.state.SelectedTheaterInfo];
        console.log(newTheater);
        this.setState({
            theaters: newTheater
        });
       this.showModal();
   
}

/*deleteTheater = () => {
    let delTheater = this.state.theaters.filter(theater => {
        return theater.id !== this.state.SelectedTheaterInfo.id
    });
    this.setState({
        theaters: delTheater
    });
}*/
showModal = () => {
    this.setState({
        setModal: !this.state.setModal,
    });

}
    
render(){
    return(
        <MDBContainer>
            <div className="row">
                <div className="col-8">
                    <MDBInput hint="Search Theaters or city" type="text" containerClass="ml-3" />
                </div>
                <div className="col-3 ">
                    <MDBBtn onClick={this.showModal}>Add Theater</MDBBtn>

                    <MDBModal isOpen={this.state.setModal}>
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
                        <MDBBtn color="grey" onClick={this.showModal}>Close</MDBBtn>
                        <MDBBtn color="primary" onClick={this.handleSubmit}>Save</MDBBtn>
                    </MDBModalFooter>
                    </MDBModal>
                
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>
                        {this.state.theaters.map(theater =>{
                        return <TheaterDetails theaterInfo={theater} editorDeleteTheater={this.EditorDeleteTheater} key={theater.id} />;
                        })}
                    </div>
                </div>
            </div>
        </MDBContainer>
    );
}

}

export default ListofTheaters;