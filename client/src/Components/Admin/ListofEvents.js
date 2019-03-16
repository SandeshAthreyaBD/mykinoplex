import React, { Component } from 'react'
import {
  MDBInput
} from 'mdbreact';
import Axios from "axios";
import * as constants from "../../Constants";
import ShowDetails from './Showdetails';
import { NavLink,Link} from 'react-router-dom'
class ListofEvents extends Component{

constructor (props) {
  super(props)
  this.state = {
    movieDetails : [],
    showDetailsArray:[],
    theatersArray:[]
  };
}

componentDidMount = () => {
  this.getMovieslistfromDB();
};
getMovieslistfromDB = () => {
  Axios.get(constants.URL_TO_USE+"/api/getAllMovieInfo")
    .then(response => {
      this.setState({ movieDetails: response.data });
    })
    .catch(error => {
      console.log(error);
    });
};

handleChange =(val)=> {
  this.setState({
  })
}

handleClick = (movieDetails) => {
 // this.getAllDatafromDB(movieDetails)
  
  //this.props.history.push('/showdetails',movieDetails)
  
};

render(){
  const mappedmovies= this.state.movieDetails.map(movie => {
    return (
      <tr key={movie.movieId}>
        <td>
          {movie.movieName}
        </td>
        <td>
          {movie.language}
        </td>
        <td>
          {movie.status}
        </td>
        <td>
        <Link to={{
            pathname: '/showdetails/'+movie.movieName,
            state: {movie}
          }}>
          <button>
            Click Here
          </button>
          </Link>
        </td>
      </tr>
    )
  })
    return( 
    <div>
      <h4 className="text-center h4-responsive font-weight-bold ">List of all your screening details</h4>
        <div className="row mt-4">
          <div className="col-7">
            <MDBInput hint="Search" type="text" containerClass="mt-0" />
          </div>
          <div className="col-3">
            <select className="browser-default custom-select" value={this.state.value} onChange={this.handleChange}>
            <option defaultValue>Select Language</option>
            <option value="Kannada">Kannada</option>
            <option value="Hindi">Hindi</option>
            <option value="Telgu">Telgu</option>
            <option value="Tamil">Tamil</option>
            <option value="Malyalam">Malyalam</option>
            <option value="English">English</option>
            </select>
          </div>
        </div>
        <div className="table-responsive">
        <table className="table table-hover w-auto table-fixed ">
          <thead>
            <tr>
              <th >MovieName</th>
              <th >Language</th>
              <th >Status</th>
              <th >showdetails</th>
            </tr>
          </thead>
          <tbody>
            {mappedmovies}
          </tbody>
        </table>
      </div>
      {/* <Showdetails showDetailsArray={this.state.showDetailsArray}
                   TheaterDetails ={this.state.showDetailsArray}/> */}
    </div>
        
    );
  }
}


export default ListofEvents;