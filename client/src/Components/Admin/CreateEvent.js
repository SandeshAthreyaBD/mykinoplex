import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import Showtable from "./Showtable";
import axios from "axios";
import * as constants from "../../Constants";

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "DD/MM/YYYY",
      movieInfo: {},
      showInfo: { startTime: new Date() },
      showDetailsArray: [],
      allTheaters: [],
      allShowDetails: [],
      allMovieInfo: [],
      showIds: []
    };
  }

  componentDidMount() {
    axios
      .get(constants.URL_TO_USE+"/api/getAllTheaters")
      .then(response => {
        this.setState({
          allTheaters: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(constants.URL_TO_USE+"/api/getAllShowDetails")
      .then(response => {
        this.setState({
          allShowDetails: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get(constants.URL_TO_USE+"/api/getAllMovieInfo")
      .then(response => {
        this.setState({
          allMovieInfo: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

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

  handleSubmit = e => {
    e.preventDefault();
    console.log("in submit");
    let currentIds = this.state.allMovieInfo.map(
      movieInfo => movieInfo.movieId
    );
    let idToBeAdded = 1;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
    let movieInfo1 = {
      movieId: idToBeAdded,
      movieName: this.state.movieInfo.movieName,
      tagline: this.state.movieInfo.tagline,
      synopsis: this.state.movieInfo.synopsis,
      cast: this.state.movieInfo.cast,
      trailerUrl: this.state.movieInfo.trailerUrl,
      genre: this.state.movieInfo.genre,
      language: this.state.movieInfo.language,
      showIds: this.state.showIds
    };
    let formData = new FormData();
    // let imagefile = document.querySelector('#file')
    formData.append("adminId", 1);
    formData.append("backdropimage", this.state.movieInfo.backdropimage);
    formData.append("posterimage", this.state.movieInfo.posterimage);
    formData.append("movieInfo", JSON.stringify(movieInfo1));
    formData.append("showDetailsArray", JSON.stringify(this.state.showDetailsArray));
    console.log("moviedata", movieInfo1);
    //console.log("this" ,formData.values());

    axios
      .post(
        constants.URL_TO_USE+"/api/insertMovieInfo", formData
      )
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleMovieInfo = e => {
    this.setState({
      movieInfo: { ...this.state.movieInfo, [e.target.id]: e.target.value }
    });
  };

  handleImageData = e => {
    this.setState({
      movieInfo: { ...this.state.movieInfo, [e.target.id]: e.target.files[0] }
    });
  };

  handleShowAdd = () => {
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
      booknowUrl: this.state.showInfo.booknowUrl
    };
    this.state.showDetailsArray.push(show);
    this.setState({
      showIds: [...this.state.showIds, show.showId]
    });
  };
  render() {
    return (
      <div className="container">
        <h4 className="h4-responsive font-weight-bold text-center mb-4">
          Have Screening Details ?? Please add here..
        </h4>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <div className="md-form-group">
            <div className="row">
              <div className="col-5">
                <label>Name of the Movie:</label>
                <input
                  type="text"
                  id="movieName"
                  className="form-control"
                  onChange={e => this.handleMovieInfo(e)}
                />
              </div>
              <div className="col-4">
                <label>Tagline</label>
                <input
                  type="text"
                  id="tagline"
                  className="form-control"
                  onChange={e => this.handleMovieInfo(e)}
                />
              </div>
              <div className="col-3">
                <label>Organizer:</label>
                <input
                  type="text"
                  id="organizer"
                  className="form-control"
                  defaultValue="1"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6 md-form-group">
                <label>Synopsis/Description:</label>
                <textarea
                  id="synopsis"
                  placeholder="Write few words about event"
                  className="form-control"
                  rows="5"
                  onChange={e => this.handleMovieInfo(e)}
                />
              </div>
              <div className="col-6">
                <label>Cast:</label>
                <textarea
                  id="cast"
                  className="form-control"
                  rows="5"
                  onChange={e => this.handleMovieInfo(e)}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <div className="md-form-group">
                  <label>Genre:</label>
                  <select
                    id="genre"
                    className="browser-default custom-select"
                    onChange={e => this.handleMovieInfo(e)}
                  >
                    <option defaultValue>Select Category</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div className="md-form-group">
                  <label>Language:</label>
                  <select
                    id="language"
                    className="browser-default custom-select"
                    onChange={e => this.handleMovieInfo(e)}
                  >
                    <option defaultValue>Select Language</option>
                    <option value="1">Kannada</option>
                    <option value="2">Telugu</option>
                    <option value="3">Tamil</option>
                    <option value="4">Hindi</option>
                    <option value="5">Malayalam</option>
                    <option value="6">English</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <div className="md-form-group">
                  <label>Status</label>
                  <select
                    id="status"
                    className="browser-default custom-select"
                    onChange={e => this.handleMovieInfo(e)}
                  >
                    <option value="Now Showing">Now Showing</option>
                    <option defaultValue value="Coming Soon">
                      Coming Soon
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div className="md-form-group">
                  <label>Trailer(link):</label>
                  <input
                    type="text"
                    id="trailerUrl"
                    className="form-control"
                    onChange={e => this.handleMovieInfo(e)}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6 md-form-group file-upload-wrapper">
                <label>Background Posters:</label>
                <br />
                <input
                  type="file"
                  id="backdropimage"
                  className="file-upload"
                  data-height="300"
                  onChange={e => this.handleImageData(e)}
                />
              </div>
              <div className="col-6 md-form-group file-upload-wrapper">
                <label>Poster Image:</label>
                <br />
                <input
                  type="file"
                  id="posterimage"
                  className="file-upload"
                  data-height="300"
                  onChange={e => this.handleImageData(e)}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="md-form-group">
                  <label>Theater:</label>
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
            </div>
            <div className="row mt-4">
              <div className="col-4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ">
                <div className="md-form-group">
                  <label>Start Date</label>
                  <br />
                  <DateTimePicker
                    onChange={e => this.handleDateChange(e)}
                    value={this.state.showInfo.startTime}
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="md-form-group">
                  <label>Total hours</label>
                  <br />
                  <input
                    type="text"
                    id="totalHours"
                    className="form-control"
                    defaultValue="3"
                    onChange={e => this.handleMovieInfo(e)}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <div className="md-form-group">
                  <label>Book Now Link</label>
                  <br />
                  <input
                    type="text"
                    id="booknowUrl"
                    className="form-control"
                    onChange={e => this.handleShowChange(e)}
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="md-form-group">
                  <button
                    type="button"
                    className="btn green mt-4"
                    onClick={e => this.handleShowAdd(e)}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="row mt-3" id="cover">
              <Showtable
                showDetailsArray={this.state.showDetailsArray}
                allTheaters={this.state.allTheaters}
              />
            </div>
            <div className="row mt-5">
              <div className="col text-center ">
                <button
                  type="submit"
                  className="btn blue-gradient"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateEvent;
