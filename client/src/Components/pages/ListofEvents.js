import React, { Component } from 'react'
import {
  MDBInput
} from 'mdbreact';

class ListofEvents extends Component{

constructor (props) {
  super(props)
  this.state = {

  };
  this.handleChange = this.handleChange.bind(this);
}

handleChange(val) {
  this.setState({
  })
}
render(){
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
        <caption>List of Events</caption>
          <thead>
            <tr>
              <th >Sl.No</th>
              <th >MovieName</th>
              <th >TheaterName</th>
              <th >StartDate</th>
              <th >StartTime</th>
              <th >EndDate</th>
              <th >EndTime</th>
              <th >Address</th>
              <th >Location</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bell Bottom</td>
              <td>CiniMAx</td>
              <td>24/02/2019</td>
              <td>14:30</td>
              <td>25/02/2019</td>
              <td>17:30</td>
              <td>Markplatz</td>
              <td>Mannheim</td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Gully Boy</td>
              <td>CiniMAx</td>
              <td>24/02/2019</td>
              <td>14:30</td>
              <td>25/02/2019</td>
              <td>17:30</td>
              <td>Markplatz</td>
              <td>Mannheim</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        
    );
  }
}


export default ListofEvents;