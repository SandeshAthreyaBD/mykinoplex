import React, { Component } from "react";
import Navbar from "./Navbar";
import CarouselComponent from "./CarouselComponent";
import MoviecardGrid from "./MoviecardGrid";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesList: [
        {
          name: "K.G.F.",
          language: "Kannada",
          certificate: "UA",
          genre: "Action",
          tagline: "",
          synopsis: "",
          cast: "",
          id: 1
        },
        {
          name: "URI",
          language: "Hindi",
          certificate: "UA",
          genre: "Action",
          tagline: "A Surgical strike",
          synopsis: "A fight for India",
          cast: "",
          id: 2
        },
        {
          name: "Natasarobhoma",
          language: "Kannada",
          certificate: "UA",
          genre: "Drama",
          tagline: "",
          synopsis: "",
          cast: "",
          id: 3
        },
        {
          name: "KirikLove",
          language: "Kannada",
          certificate: "UA",
          genre: "Romantic",
          tagline: "Love story of teenagers",
          synopsis: "",
          cast: "",
          id: 4
        },
        {
          name: "Manikarnika",
          language: "Hindi",
          certificate: "UA",
          genre: "History",
          tagline: "The queen of Jhansi",
          synopsis: "",
          cast: "",
          id: 5
        },
        {
          name: "GullyBoy",
          language: "Hindi",
          certificate: "UA",
          genre: "Comedy",
          tagline: "Funnymovie",
          synopsis: "",
          cast: "",
          id: 6
        },
        {
          name: "Oru Omar Love",
          language: "MAlayalam",
          certificate: "UA",
          genre: "Romantic",
          tagline: "",
          synopsis: "",
          cast: "",
          id: 7
        },
        {
          name: "SpiderMan",
          language: "English",
          certificate: "UA",
          genre: "Thriller",
          tagline: "",
          synopsis: "",
          cast: "",
          id: 8
        }
      ]
    };
  }

  render() {
    console.log(this.state.moviesList);
    return (
      <div>
        <Navbar />
        <CarouselComponent />
        <MoviecardGrid moviesList={this.state.moviesList} />
      </div>
    );
  }
}
export default Home;
