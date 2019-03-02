import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import AdminDashboard from "./Components/AdminDashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={AdminDashboard} />
          <Route path="/createevent" component={AdminDashboard} />
          <Route path="/listofevents" component={AdminDashboard} />
          <Route path="/listoftheaters" component={AdminDashboard} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
