import React from "react";
// eslint-disable-next-line
import { MDBContainer } from "mdbreact";
import Movieshows from "./Movieshows";

const MovieshowsGrid = ({showDetailsArray, theatersArray}) => {

  const showandtheaterInfos = [ ];
  
  showDetailsArray.map(show => {
    let theaterInfo = { };

    theatersArray.some(theater => {
      if(theater.theaterId === show.theaterId) {
      showandtheaterInfos.push({ 
        theaterId:theaterInfo.theaterId,
        theaterName: theaterInfo.theaterName,
          country: theaterInfo.address.country,
          city: theaterInfo.address.city,
          street: theaterInfo.address.street,
          zipcode: theaterInfo.address.zipcode,
        showId: show.showId,
        bookNowUrl: show.bookNowUrl,
        startTime: show.startTime,
        showStatus: show.showStatus
      });
    }
  })
});

  let uniqueCities = [...new Set(showandtheaterInfos.map(item => item.city))];

  return (
    <MDBContainer>
      <div className="flex-column no-gutters">
        {uniqueCities.map(city => {
          let cityRelatedShows = [ ];
          showandtheaterInfos.map(item => {
            if(item.city === city) 
              cityRelatedShows.push({item});
          });
          return (
            <div className="flex-column p-2">
          <h4>{city}</h4> 
          <Movieshows shows={cityRelatedShows}/>
          </div>
          )
        })}
          <div className="flex-column p-2">
            <h4>Frankfurt</h4>
            <Movieshows />
          </div>
          <div className="flex-column p-2">
            <h4>Mannheim</h4>
            <Movieshows />
          </div>
      </div>
    </MDBContainer>
  );
};

export default MovieshowsGrid;
