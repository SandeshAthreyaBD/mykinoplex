import React, { Component } from "react";
import Navbar from "./Navbar";
import CarouselComponent from "./CarouselComponent";
import MoviecardGrid from "./MoviecardGrid";
import Footer from "./Footer";
import Heading from "./Heading";
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
          imgsrc: "kgf",
          status: "Now Showing",
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
          imgsrc: "uri",
          status: "Now Showing",
          id: 2
        },
        {
          name: "Natasarawbhoma",
          language: "Kannada",
          certificate: "UA",
          genre: "Drama",
          tagline: "",
          synopsis: "",
          cast: "",
          imgsrc: "Gully",
          status: "Coming Soon",
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
          imgsrc: "kgf",
          status: "Coming Soon",
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
          imgsrc: "manikarnika",
          status: "Now Showing",
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
          imgsrc: "Gully",
          status: "Now Showing",
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
          imgsrc: "uri",
          status: "Coming Soon",
          id: 7
        },
        {
          name: "Aquaman",
          language: "English",
          certificate: "UA",
          genre: "Thriller",
          tagline: "",
          synopsis: "",
          cast: "",
          imgsrc: "aquaman",
          status: "Now Showing",
          id: 8
        }
      ]
    };
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "Black"
        }}
      >
        <Navbar />
        <CarouselComponent />
        <Heading />
        <MoviecardGrid moviesList={this.state.moviesList} />
        <Footer />
      </div>
    );
  }
}
export default Home;
