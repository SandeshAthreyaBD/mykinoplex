import React, { Component } from "react";
import {
  MDBIcon,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBBtn
} from "mdbreact";
import Axios from "axios";
import * as constants from "../../Constants";
import DateTimePicker from "react-datetime-picker";
import {ToastsContainer, ToastsStore,ToastsContainerPosition} from 'react-toasts';

class ShowDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetailsArray: [],
      theatersArray: [],
      showandtheaterInfos: [],
      showStatus: null,
      editModal: false,
      allTheaters: [],
      movieDetail: this.props.location.state,
      allShowDetails: [],
      showInfo: { startTime: new Date() }
    };
  }

  componentDidMount = () => {
    this.getDataFromDB(this.state.movieDetail);
  };

  getDataFromDB = (movieDetails) => {
    Axios.get(constants.URL_TO_USE + "/api/getAllTheaters")
      .then(response => {
        this.setState({
          allTheaters: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    Axios.get(constants.URL_TO_USE + "/api/getAllShowDetails")
      .then(response => {
        this.setState({
          allShowDetails: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
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
  handleEdit = () => {};

  handleDelete = showDetails => {
    if (window.confirm("Do you want to delete this show?")) {
      let updatedShowDetails = this.state.showDetailsArray.filter(show => {
        return show.showId === showDetails.showId;
      });
      this.setState({
        movieDetail: this.state.movieDetail.movie.showIds.pop(
          updatedShowDetails.showId
        )
      });
      Axios.post(
        constants.URL_TO_USE + "/api/deleteShowDetails/" + showDetails.showId,
        {
          showId: showDetails.showId
        }
      ).then(response => {
        console.log(this.state.movieDetail.movie.movieId)
        Axios.post(
          constants.URL_TO_USE +"/api/updateMovieInfo/" + this.state.movieDetail.movie.movieId,
          {
            movieInfo: this.state.movieDetail.movie
          }
        )
          .then(response => {
            console.log(response)
            let updatedShowDetails = this.state.showDetailsArray.filter(
              show => {
                return show.showId !== showDetails.showId;
              }
            );
            console.log(updatedShowDetails)
            this.setState({
              showDetailsArray: updatedShowDetails
            });
            this.setShowandTheaterInfo();
            ToastsStore.success("Show Deleted Successfully")
          })
          .catch(error => {
            ToastsStore.success(error)
          });
      });
    }
  };
  
  showModal = () => {
    this.setState({
      editModal: !this.state.editModal
    });
  };

  handleShowChange = e => {
    this.setState({
      showInfo: { ...this.state.showInfo, [e.target.id]: e.target.value }
    });
  };
  handleDateChange = date => {
    this.setState({
      showInfo: { ...this.state.showInfo, startTime: date }
    });
  };
  handleSubmit = () => {
    this.showModal();
    let currentshowIds = this.state.allShowDetails.map(
      showDetails => showDetails.showId
    );
    let showIdToBeAdded = 1;
    while (
      currentshowIds.includes(showIdToBeAdded) ||
      this.state.showIds.includes(showIdToBeAdded)
    ) {
      ++showIdToBeAdded;
    }
    let show = {
      showId: showIdToBeAdded,
      theaterId: this.state.showInfo.theaterId,
      startTime: this.state.showInfo.startTime,
      bookNowUrl: this.state.showInfo.bookNowUrl
    };
    this.state.showDetailsArray.push(show);
    this.state.movieDetail.movie.showIds.push(showIdToBeAdded);

    Axios.post(constants.URL_TO_USE + "/api/insertShowDetails", {
      showDetailsArray: show
    }).then(response => {
      Axios.post(
        constants.URL_TO_USE +
          "/api/updateMovieInfo/" +
          this.state.movieDetail.movie.movieId,
        {
          movieInfo: this.state.movieDetail.movie
        }
      ).then(response => {
          let updatedShowDetails = this.state.showDetailsArray.filter(
            showDetails => {
              return showDetails.showId !== show.showId;
            }
          );
          this.setState({
            showDetailsArray: updatedShowDetails
          });
          this.setShowandTheaterInfo();
          ToastsStore.success("Show added Successfully")
        })
        .catch(error => {
          ToastsStore.success(error)
        });
    });
  };

  render() {
    if (this.state.showandtheaterInfos.length <= 0) {
      return <div>Loading data Please wait....</div>;
    }
    const mappedshows = this.state.showandtheaterInfos.map(show => {
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
    });
    return this.state.showDetailsArray.length > 0 ? (
      <MDBContainer>
        <div>
          <button onClick={() => this.setState({ editModal: true })}>
            Add Shows
          </button>
        </div>
        <MDBModal isOpen={this.state.editModal}>
          <MDBModalHeader>Add New Show</MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="md-form-group ">
                <div className="row">
                  <div className="col">
                    <label>Theater Name:</label>
                    <select
                      id="theaterId"
                      value={this.state.value}
                      onChange={e => this.handleShowChange(e)}
                      className="browser-default custom-select"
                    >
                      <option value="-1" defaultValue>
                        Select Theater
                      </option>
                      {this.state.allTheaters.map(theater => {
                        return (
                          <option
                            key={theater.theaterId}
                            value={theater.theaterId}
                          >
                            {theater.theaterName},{theater.address.street},{" "}
                            {theater.address.city},{theater.address.zipcode},{" "}
                            {theater.address.country}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <label>Date and Time:</label>
                    <br />
                    <DateTimePicker
                      onChange={e => this.handleDateChange(e)}
                      value={this.state.showInfo.startTime}
                    />
                  </div>
                  <div className="col-4">
                    <label>Total Hours:</label>
                    <br />
                    <input
                      type="text"
                      id="totalHours"
                      className="form-control"
                      defaultValue="3"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label>Booking Url:</label>
                    <input
                      type="text"
                      id="bookNowUrl"
                      className="form-control"
                      onChange={e => this.handleShowChange(e)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="grey" onClick={this.showModal}>
              Close
            </MDBBtn>
            <MDBBtn color="primary" onClick={() => this.handleSubmit()}>
              Save
            </MDBBtn>
            <ToastsContainer position={ToastsContainerPosition.BOTTOM_CENTER} store={ToastsStore}/>
          </MDBModalFooter>
        </MDBModal>
        <div>
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
        </div>
      </MDBContainer>
    ) : (
      <div />
    );
  }
}

export default ShowDetails;
