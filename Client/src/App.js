import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Client/Components/Login";
import Kannada from "./Client/Components/Languages/Kannada";
import Tamil from "./Client/Components/Languages/Tamil";
import Telugu from "./Client/Components/Languages/Telugu";
import Hindi from "./Client/Components/Languages/Hindi";
import Malayalam from "./Client/Components/Languages/Malayalam";
import Home from "./Client/Components/Home";
import Contact from "./Client/Components/Contact";
import MovieInfoPage from "./Client/Components/MovieInfoPage";
import Signin from "./Client/Components/Modals/Signin";
import NotFound from "./Client/Components/NotFound";

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
          <Route path="/movieinfopage" component={MovieInfoPage} />
          <Route path="/admin-login-mykinoplex" component={Signin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
