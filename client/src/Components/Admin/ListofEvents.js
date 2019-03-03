import React, { Component } from 'react'
import {
  MDBInput
} from 'mdbreact';

class ListofEvents extends Component{

constructor (props) {
  super(props)
  this.state = {
    movieDetails : [{
      id: "1",
      moviename: "Ashwini",
      language: "tulu",
      status: "upcoming"
    }]
  };
}

handleChange =(val)=> {
  this.setState({
  })
}
handleClick = (e) => {
  this.props.history.push("/showdetails")
 
};
render(){
  const mappedmovies= this.state.movieDetails.map(movie => {
    return (
      <tr key={movie.id}>
        <td>
          {movie.id}
        </td>
        <td>
          {movie.moviename}
        </td>
        <td>
          {movie.language}
        </td>
        <td>
          {movie.status}
        </td>
        <td>
          <button onClick={this.handleClick}>
            Click Here
          </button>
        </td>
      </tr>
    )
  })
    return( 
    <div>
      <h4 class="text-center h4-responsive font-weight-bold ">List of all your screening details</h4>
        <div class="row mt-4">
          <div class="col-7">
            <MDBInput hint="Search" type="text" containerClass="mt-0" />
          </div>
          <div class="col-3">
            <select class="browser-default custom-select" value={this.state.value} onChange={this.handleChange}>
            <option selected>Select Language</option>
            <option selected>Kannada</option>
            <option selected>Hindi</option>
            <option selected>Telgu</option>
            <option selected>Tamil</option>
            <option selected>Malyalam</option>
            </select>
          </div>
        </div>
        <div class="table-responsive">
        <table class="table table-hover w-auto table-fixed ">
          <thead>
            <tr>
              <th >ID</th>
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
    </div>
        
    );
  }
}


export default ListofEvents;