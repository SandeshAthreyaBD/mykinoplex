import React, { Component } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker"
import "react-datepicker/dist/react-datepicker.css";
import Showtable from "./Showtable";


class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      format: "DD/MM/YYYY",
      enableContainer: '',
      movieInfo: {
        movieName: "",
        organizer: "",
        tagline: "",
        synopsis: "",
        cast: "",
        genre: "",
        language: "",
        status: "",
        trailerLink: "",
        backPoster: "",
        cardPoster: "",
        date: "",
        time: '10:00',
        booknowlink: "",
        hours: "",
        theater: "",
        city: "",
        street: "",
        pincode: ""
      }
    };
  }
  enableDiv = () => {
    this.setState({
      enableContainer: true
    });
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  onChange = time => this.setState({
   movieInfo: {...this.state.movieInfo, time:time}
   })

  handleSubmit = e => {
    e.preventDefault();
  };

  handleMovieInfo = e => {
    this.setState({
      ...this.state,
      ...this.state.movieInfo,
      movieInfo: { [e.target.id]: e.target.value }
    });
  };
  handleAdd = () => {
    console.log("add");
  };
  render() {
    return (
      <div className="container">
        <h4 className="h4-responsive font-weight-bold text-center mb-4">
          Have Screening Details ?? Please add here..
        </h4>
        <form onSubmit={this.handleSubmit}>
          <div className="md-form-group ">
            <div className="row">
              <div className="col-5">
                <label>Name of the Movie:</label>
                <input
                  type="text"
                  id="movieName"
                  className="form-control"
                  onChange={this.handleMovieInfo}
                />
              </div>
              <div className="col-4">
                <label>Tagline</label>
                <input
                  type="text"
                  id="tagline"
                  className="form-control"
                  onChange={this.handleMovieInfo}
                />
              </div>
              <div className="col-3">
                <label>Organizer:</label>
                <input
                  type="text"
                  id="organizer"
                  className="form-control"
                  onChange={this.handleMovieInfo}
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
                  onChange={this.handleMovieInfo}
                />
              </div>
              <div className="col-6">
                <label>Cast:</label>
                <textarea
                  id="cast"
                  className="form-control"
                  rows="5"
                  onChange={this.handleMovieInfo}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <div className="md-form-group">
                  <label>Category:</label>
                  <select
                    id="genre"
                    className="browser-default custom-select"
                    onChange={this.handleMovieInfo}
                  >
                    <option defaultValue>Select Category</option>
                    <option value="1">Thriller</option>
                    <option value="2">Action</option>
                    <option value="3">Drama</option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div className="md-form-group">
                  <label>Language:</label>
                  <select
                    id="language"
                    className="browser-default custom-select"
                    onChange={this.handleMovieInfo}
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
                    onChange={this.handleMovieInfo}
                  >
                    <option defaultValue>Select Status</option>
                    <option value="1">Now Playing</option>
                    <option value="2">Coming soon</option>
                    <option value="3">Extinct</option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div className="md-form-group">
                  <label>Trailer(link):</label>
                  <input
                    type="text"
                    id="trailerLink"
                    className="form-control"
                    onChange={this.handleMovieInfo}
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
                  id="backPoster"
                  className="file-upload"
                  data-height="300"
                  onChange={this.handleMovieInfo}
                />
              </div>
              <div className="col-6 md-form-group file-upload-wrapper">
                <label>Small Posters:</label>
                <br />
                <input
                  type="file"
                  id="cardPoster"
                  className="file-upload"
                  data-height="300"
                  onChange={this.handleMovieInfo}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="md-form-group">
                  <label>Theater:</label>
                  <select
                    id="theater"
                    value={this.state.value}
                    onChange={this.handleMovieInfo}
                    className="browser-default custom-select"
                  >
                    <option defaultValue>Select Theater</option>
                    <option value="Cineplex">Cineplex</option>
                    <option value="Cineplex 2">Cineplex 2</option>
                    <option value="Cineplex 3">Cineplex 3</option>
                    <option value="Cineplex 4">Cineplex 4</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-3">
                <div className="md-form-group">
                  <label>Start Date</label>
                  <br />
                  <DatePicker
                    id="date"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="md-form-group">
                  <label>Time: </label>
                  <br />
                  <TimePicker
                    onChange={this.onChange}
                    value={this.state.movieInfo.time}
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="md-form-group">
                  <label>Total hours</label>
                  <br />
                  <input
                    type="text"
                    id="hours"
                    className="form-control"
                    onChange={this.handleMovieInfo}
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
                    id="booknowlink"
                    className="form-control"
                    onChange={this.handleMovieInfo}
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="md-form-group">
                  <button
                    type="button"
                    className="btn green mt-4"
                    onClick={this.handleAdd}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="row mt-3" id="cover">
              <Showtable 
              theater={this.state.movieInfo.theater}
              city={this.state.movieInfo.city}
              street={this.state.movieInfo.street}
              pincode={this.state.movieInfo.pincode}
              date={this.state.movieInfo.date}
              time={this.state.movieInfo.time}
              />
            </div>
            <div className="row mt-5">
              <div className="col text-center ">
                <button type="button" className="btn blue-gradient">
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
