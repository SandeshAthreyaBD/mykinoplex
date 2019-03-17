import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import Axios from "axios";
import * as constants from "../../Constants";
import { Link } from "react-router-dom";
class ListofEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: [],
      showDetailsArray: [],
      theatersArray: [],
      languages :[]
    };
  }

  componentDidMount = () => {
    this.setState({languages:constants.LANGUAGES})
    this.getMovieslistfromDB();
  };
  getMovieslistfromDB = () => {
    Axios.get(constants.URL_TO_USE + "/api/getAllMovieInfo")
      .then(response => {
        this.setState({ movieDetails: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = val => {
    this.setState({});
  };

  render() {
    const mappedmovies = this.state.movieDetails.map(movie => {
      return (
        <tr key={movie.movieId}>
          <td>{movie.movieName}</td>
          <td>{movie.language}</td>
          <td>{movie.status}</td>
          <td>
            <Link
              to={{
                pathname: "/showdetails/" + movie.movieName,
                state: { movie }
              }}
            >
              <button>Click Here</button>
            </Link>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <h4 className="text-center h4-responsive font-weight-bold ">
          List of all your screening details
        </h4>
        <div className="row mt-4">
          <div className="col-7">
            <MDBInput hint="Search" type="text" containerClass="mt-0" />
          </div>
          <div className="col-3">
          <select
            id="language"
            className="browser-default custom-select"
            onChange={e => this.handleMovieInfo(e)}>
            {this.state.languages.map((language) => <option key={language} value={language}>{language}</option>)}
            </select>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover w-auto table-fixed ">
            <thead>
              <tr>
                <th>MovieName</th>
                <th>Language</th>
                <th>Status</th>
                <th>showdetails</th>
              </tr>
            </thead>
            <tbody>{mappedmovies}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListofEvents;
