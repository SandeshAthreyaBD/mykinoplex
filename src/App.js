import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Kannada from "./Components/Languages/Kannada";
import Tamil from "./Components/Languages/Tamil";
import Telugu from "./Components/Languages/Telugu";
import Hindi from "./Components/Languages/Hindi";
import Malayalam from "./Components/Languages/Malayalam";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/kannada" component={Kannada} />
          <Route path="/tamil" component={Tamil} />
          <Route path="/hindi" component={Hindi} />
          <Route path="/telugu" component={Telugu} />
          <Route path="/malayalam" component={Malayalam} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
