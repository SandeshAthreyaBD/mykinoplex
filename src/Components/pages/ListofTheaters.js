import React, {Component} from 'react';
import {MDBContainer,MDBInput, MDBBtn,} from 'mdbreact';
import  TheaterDetails from './TheaterDetails';
import AddTheater from '../Modals/AddTheater';

class ListofTheaters extends Component{
    constructor(props) {
        super(props);

        this.state = {
            EditBtn:false,
            DelBtn:false,
            theaters: [{
                id:1,
                TheaterName: 'Cinemax',
                Street: 'Markplatz 23',
                City:'Mannheim',
                PLZ:'69168',
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
                PLZ:'69168',
                Country: 'Germany',
                
            }],
        };

    }
EditorDeleteTheater =(theaterid) =>{

}

handleChange = (e) =>{
    this.setState({EditBtn:true})
}
addTheater = (theater) => {
    theater.id = Math.random();
    let newTheater = [...this.state.theaters, theater];
    this.setState({
        theaters: newTheater
    });
    console.log(this.state.theaters);
    }

/*deleteTheater = (id) => {
    let delTheater = this.state.theaters.filter(theater => {
        return theater.id !== id
    });
    this.setState({
        theaters: delTheater
    });
    }*/
    
render(){
    return(
        <MDBContainer>
            <div className="row">
                <div className="col-6">
                    <MDBInput hint="Search Theaters or city" type="text" containerClass="ml-3" />
                </div>
                <div className="col-2 ">
                    <AddTheater addTheater={this.addTheater}/>
                </div>
                <div className="col-2">
                    <MDBBtn disabled={!this.state.EditBtn}>Edit</MDBBtn>
                </div>
                <div className="col-2">
                    <MDBBtn>Delete</MDBBtn>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>
                        {this.state.theaters.map(theater =>{
                        return <TheaterDetails theaterInfo={theater} key={theater.id}  />;
                        })}
                    </div>
                </div>
            </div>
        </MDBContainer>
    );
}

}

export default ListofTheaters;