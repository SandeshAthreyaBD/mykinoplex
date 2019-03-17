import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import Axios from "axios";
import * as constants from "../../Constants";

class ShowDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetailsArray: [],
      theatersArray: [],
      showandtheaterInfos: [],
      showStatus: null
    };
  }

  componentDidMount = () => {
    const movieDetails = this.props.location.state;
    this.getDataFromDB(movieDetails);
  };

  getDataFromDB = movieDetails => {
    Axios.get(constants.URL_TO_USE + "/api/getMultipleShowDetailsById", {
      params: { showIds: movieDetails.movie.showIds }
    })
      .then(response => {
        this.setState({ showDetailsArray: response.data });
        let theaterIds = [];
        this.state.showDetailsArray.map(show => {
          let theaterId = show.theaterId;
          if (!theaterIds.includes(theaterId)) {
            theaterIds.push(theaterId);
          }
        });
        return theaterIds;
      })
      .then(theaterIds => {
        return Axios.get(
          constants.URL_TO_USE + "/api/getMultipleTheatersById",
          {
            params: { theaterIds: theaterIds }
          }
        );
      })
      .then(response => {
        this.setState({ theatersArray: response.data });
      })
      .then(response => {
        this.setShowandTheaterInfo();
      })
      .catch(error => {
        console.log(error);
      });
  };
  setShowandTheaterInfo = () => {
    let showTheaterArray = [];
    this.state.showDetailsArray.map(show => {
      this.state.theatersArray.some(theater => {
        if (theater.theaterId === show.theaterId) {
          showTheaterArray.push({
            theaterId: theater.theaterId,
            theaterName: theater.theaterName,
            country: theater.address.country,
            city: theater.address.city,
            street: theater.address.street,
            zipcode: theater.address.zipcode,
            showId: show.showId,
            bookNowUrl: show.bookNowUrl,
            startTime: new Date(show.startTime),
            showStatus: show.showStatus
          });
        }
      });
    });
    this.setState({
      showandtheaterInfos: showTheaterArray
    });
  };
  handleEdit = ()=>{

  }
  handleDelete = showDetails => {
    if (window.confirm("Do you want to delete this show?")) {
      Axios.post(
        constants.URL_TO_USE + "/api/deleteShowDetails/" + showDetails.showId,
        {
          showId: showDetails.showId
        }
      ).then(response => {
        console.log(response.data);
        let updatedShowDetails = this.state.showDetailsArray.filter(show => {
          return show.showId !== showDetails.showId;
        });
        this.setState({
          showDetailsArray: updatedShowDetails
        });
        this.setShowandTheaterInfo();
      });
    }
  };
  handleShowInfo =() =>{

  }
  render() {
    if (this.state.showandtheaterInfos.length <= 0) {
      return <div>Loading data Please wait....</div>;
    }
    const mappedshows = this.state.showandtheaterInfos.map(
      (show) => {
        show.showStatus ==="Now Showing" ? this.state.showStatus = "Coming Soon" : this.state.showStatus = "Now Showing"
 
        return (
          <tr key={show.showId}>
            <td>
              <MDBIcon icon="edit" onClick={() => this.handleEdit(show)} />
            </td>
            <td>{show.theaterName}</td>
            <td>{show.street}</td>
            <td>{show.city}</td>
            <td>{show.country}</td>
            <td>{show.startTime.toLocaleDateString()}</td>
            <td>
              {show.startTime.getHours()} :{show.startTime.getMinutes()}
            </td>
            <td>{show.showStatus}</td>
            <td>{show.bookNowUrl}</td>
            <td>
              <MDBIcon icon="trash" onClick={() => this.handleDelete(show)} />
            </td>
          </tr>
        );
      }
    );
    return this.state.showDetailsArray.length > 0 ? (
      <table className="table table-hover w-auto  ">
        <thead>
          <tr>
            <th>Edit</th>
            <th>Theatre Name</th>
            <th>Street</th>
            <th>City</th>
            <th>Country</th>
            <th>Start Date</th>
            <th>Start Time</th>
            <th>Status</th>
            <th>Booking Url</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{mappedshows}</tbody>
      </table>
    ) : (
      <div />
    );
  }
}

export default ShowDetails;
