import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Kannada from "./Components/Languages/Kannada";
import Tamil from "./Components/Languages/Tamil";
import Telugu from "./Components/Languages/Telugu";
import Hindi from "./Components/Languages/Hindi";
import Malayalam from "./Components/Languages/Malayalam";
import Home from "./Components/Enduser/Home";
import Contact from "./Components/Enduser/Contact";
import MovieInfoPage from "./Components/Enduser/MovieInfoPage";
import Signin from "./Components/Modals/Signin";
import NotFound from "./Components/NotFound";
import AdminDashboard from "./Components/Admin/AdminDashboard";

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
          <Route path="/movieinfopage/:id" component={MovieInfoPage} />
          <Route path="/admin-login-mykinoplex" component={Signin} />
          <Route path="/admin/createevent" component={AdminDashboard} />
          <Route path="/listofevents" component={AdminDashboard} />
          <Route path="/listoftheaters" component={AdminDashboard} />
          <Route path="/showdetails" component={AdminDashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}
export default App;
