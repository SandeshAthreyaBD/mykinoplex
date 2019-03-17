import React from "react";
// eslint-disable-next-line
import { MDBContainer } from "mdbreact";
import Movieshows from "./Movieshows";

const MovieshowsGrid = ({ showDetailsArray, theatersArray }) => {
  const showandtheaterInfos = [];

  showDetailsArray.map(show => {
    theatersArray.some(theater => {
      if (theater.theaterId === show.theaterId) {
        showandtheaterInfos.push({
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

  let uniqueCities = [...new Set(showandtheaterInfos.map(item => item.city))];

  return (
    <MDBContainer fluid>
      <div className="flex-column no-gutters">
        {uniqueCities.map(city => {
          let cityRelatedShows = [];
          showandtheaterInfos.map(item => {
            if (item.city === city) cityRelatedShows.push(item);
          });
          return (
            <div className="flex-column p-2" key={city}>
              <h4 className="text-center text-white">{city}</h4>
              <Movieshows shows={cityRelatedShows} />
            </div>
          );
        })}
      </div>
    </MDBContainer>
  );
};

export default MovieshowsGrid;
