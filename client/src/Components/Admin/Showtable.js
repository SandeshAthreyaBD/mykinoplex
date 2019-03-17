import React from "react";

const Showtable = ({ showDetailsArray, allTheaters }) => {

  const tableValues = showDetailsArray.map(showDetails => {
    let selectedTheater = allTheaters.filter(theater => {
      if (theater.theaterId == showDetails.theaterId) {
        return theater;
      }
    });
    
    return (
    <tr key={showDetails.showId}>
      <td>{selectedTheater[0].theaterName}</td>
      <td>
        {selectedTheater[0].address.street},{selectedTheater[0].address.city},
        {selectedTheater[0].address.country}
      </td>
      <td>{showDetails.startTime.toLocaleDateString()}</td>
      <td>
        {showDetails.startTime.getHours()} :{" "}
        {showDetails.startTime.getMinutes()}
      </td>
      <td>{showDetails.bookNowUrl}</td>
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
