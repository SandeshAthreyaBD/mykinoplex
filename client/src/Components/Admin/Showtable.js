import React, { Component } from "react";

const Showtable = ({ showDetailsArray,allTheaters }) => {

    return (

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
        {showDetailsArray.map(showDetails => {
                
                let selectedTheater;
                allTheaters.map(theater => {
                  if (theater.theaterId == showDetails.theaterId) {
                    selectedTheater = theater;
                  }
                });

                <tbody>
          <tr key={showDetails.showID}>
          <td>{selectedTheater.theaterName}</td>
          <td>{selectedTheater.address.street},{selectedTheater.address.city},{selectedTheater.address.country}</td>
          <td>{showDetails.startTime.toLocaleDateString()}</td>
          <td>{showDetails.startTime.getHours()} : {showDetails.startTime.getMinutes()}</td>
          <td>{showDetails.booknowUrl}</td>
        </tr>
        </tbody>
              })
            }
        
      </table>
    );
};
export default Showtable;
