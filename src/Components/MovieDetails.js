import React, {Component} from "react";
import Navbar from "./Navbar";
import ImageFlex from "./ImageFlexComponent";
import MovieDetailComponent from "./MovieDetailComponent";

class MovieDetailPage extends Component{
    render()
    {
        return(
            <div>
                <Navbar/>
                <ImageFlex/>
                <MovieDetailComponent/>
            </div>
        );
    }
}

export default MovieDetailPage;