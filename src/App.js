import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Kannada from "./Components/Languages/Kannada";
import Tamil from "./Components/Languages/Tamil";
import Telugu from "./Components/Languages/Telugu";
import Hindi from "./Components/Languages/Hindi";
import Malayalam from "./Components/Languages/Malayalam";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import MovieDetails from "./Components/MovieDetails";
import Signin from "./Components/Modals/Signin";
import NotFound from "./Components/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/kannada" component={Kannada} />
          <Route path="/tamil" component={Tamil} />
          <Route path="/hindi" component={Hindi} />
          <Route path="/telugu" component={Telugu} />
          <Route path="/malayalam" component={Malayalam} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/movieDetail" component={MovieDetails} />
          <Route path="/admin-login-mykinoplex" component={Signin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
