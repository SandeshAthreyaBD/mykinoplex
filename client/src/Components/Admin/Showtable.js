import React, { Component } from "react";

const Showtable = ({ showDetailsArray, allTheaters }) => {

  const tableValues = showDetailsArray.map(showDetails => {
    let selectedTheater;
    allTheaters.map(theater => {
      if (theater.theaterId == showDetails.theaterId) {
        selectedTheater = theater;
      }
    });
    return (
    <tr key={showDetails.showId}>
      <td>{selectedTheater.theaterName}</td>
      <td>
        {selectedTheater.address.street},{selectedTheater.address.city},
        {selectedTheater.address.country}
      </td>
      <td>{showDetails.startTime.toLocaleDateString()}</td>
      <td>
        {showDetails.startTime.getHours()} :{" "}
        {showDetails.startTime.getMinutes()}
      </td>
      <td>{showDetails.booknowUrl}</td>
    </tr>
    );
  });

  return (
    showDetailsArray.length > 0 ?
    <table className="tablMoviecard-hover w-auto table-fixed ">
      <thead>
        <tr>
          <th>Theatre Name</th>
          <th>Address</th>
          <th>Start Date</th>
          <th>Start Time</th>
          <th>Book Now</th>
        </tr>
      </thead>
      <tbody>
        {tableValues}
      </tbody>
    </table>
    : null
  );
};
export default Showtable;
