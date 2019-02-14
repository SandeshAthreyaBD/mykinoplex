import React, {Component} from "react";
import Navbar from "./Navbar";
import ImageFlex from "./ImageFlexComponent";
import MovieDetailComponent from "./MovieDetailComponent";
import Footer from "./Footer";
import MovieshowsGrid from "./MovieshowsGrid";

class MovieInfoPage extends Component{
    render()
    {
        return(
            <div>
                <Navbar/>
                <ImageFlex/>
                <MovieDetailComponent/>
                <MovieshowsGrid />
                <Footer />
            </div>
        );
    }
}

export default MovieInfoPage;