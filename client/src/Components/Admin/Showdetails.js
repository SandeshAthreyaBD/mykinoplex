import React , {Component} from "react";
import { MDBIcon } from "mdbreact";

class Showdetails extends Component {
    state = {
        showdetails: [{
            showID: "1",
            theatreName: "Cineplex",
            address: "Am Steingarten",
            startDate: "12/07/2019",
            startTime: "09:00",
            status: "Now showing"
         }]
    }

    render(){
        const mappedshows = this.state.showdetails.map(show => {
            return (
                <tr key={show.showID}>
                  <td>
                    {show.showID}
                  </td>
                  <td>
                    {show.theatreName}
                  </td>
                  <td>
                    {show.address}
                  </td>
                  <td>
                    {show.startDate}
                  </td>
                  <td>
                    {show.startTime}
                  </td>
                  <td>
                    {show.status}
                  </td>
                  <td>
                    <MDBIcon icon="edit" />
                  </td>
                  <td>
                    <MDBIcon icon="trash" />
                  </td>
                </tr>
              )
        })
        return(
        <table class="table table-hover w-auto table-fixed ">
        <thead>
          <tr>
            <th >Show ID</th>
            <th >Theatre Name</th>
            <th >Street</th>
            <th >City</th>
            <th >Country</th>
            <th >Start Date</th>
            <th >Start Time</th>
            <th >Status</th>
            <th >Edit</th>
            <th >Delete</th>
          </tr>
        </thead>
        <tbody>
        {mappedshows}
        </tbody>
      </table>)
    }
}

export default Showdetails