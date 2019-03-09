import React, { Component } from "react";

class Showtable extends Component {
  state = {
    showtable: [
      {
        showID: "",
        theatreName: "",
        address: "",
        startDate: "",
        startTime: "",
        booknowUrl: "",
        status: ""
      }
    ]
  };

  render() {
    const mappedshows = this.state.showtable.map(show => {
      return (
        <tr key={show.showID}>
          <td>{show.showID}</td>
          <td>{show.theatreName}</td>
          <td>{show.address}</td>
          <td>{show.startDate}</td>
          <td>{show.startTime}</td>
        </tr>
      );
    });
    return (
      <table class="table table-hover w-auto table-fixed ">
        <thead>
          <tr>
            <th>Show ID</th>
            <th>Theatre Name</th>
            <th>Address</th>
            <th>Start Date</th>
            <th>Start Time</th>
            <th>Book Now</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{mappedshows}</tbody>
      </table>
    );
  }
}

export default Showtable;
