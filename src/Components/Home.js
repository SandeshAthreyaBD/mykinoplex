import React, { Component } from "react";
import Coverflow from "react-coverflow";
import { MDBBtn } from "mdbreact";
import MoviecardGrid from "./MoviecardGrid";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }
  _handleClick() {
    var num = Math.floor(Math.random() * 10 + 1);
    this.setState({
      active: num
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#1C2331" }}>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
          style={{ backgroundColor: "black" }}
        >
          <div
            // onClick={}
            // onKeyDown={}
            role="menuitem"
            tabIndex="0"
            style={{ backgroundColor: "black" }}
          >
            {/* <img src={require("../Images/album-1.png")} alt="Album one" /> */}
          </div>
          <img
            src={require("../Images/1.png")}
            alt="Album two"
            data-action="http://passer.cc"
          />
          <img
            src={require("../Images/2.png")}
            alt="Album two"
            data-action="http://passer.cc"
          />
          <img
            src={require("../Images/3.png")}
            alt="Album two"
            data-action="http://passer.cc"
          />
          <img
            src={require("../Images/4.png")}
            alt="Album two"
            data-action="http://passer.cc"
          />
          <img
            src={require("../Images/album-2.png")}
            alt="Album two"
            data-action="http://passer.cc"
          />
          <img
            src={require("../Images/album-3.png")}
            alt="Album three"
            data-action="https://doce.cc/"
          />
          <img
            src={require("../Images/album-4.png")}
            alt="Album four"
            data-action="http://tw.yahoo.com"
          />
          <img
            src={require("../Images/album-5.png")}
            alt="Album five"
            data-action="http://www.bbc.co.uk"
          />
          <img
            src={require("../Images/album-6.png")}
            alt="Album six"
            data-action="https://medium.com"
          />
          <img
            src={require("../Images/album-7.png")}
            alt="Album seven"
            data-action="http://www.google.com"
          />
          <img
            src={require("../Images/album-1.png")}
            alt="Album one"
            data-action="https://facebook.github.io/react/"
          />
          <img
            src={require("../Images/album-2.png")}
            alt="Album two"
            data-action="http://passer.cc"
          />
          <img
            src={require("../Images/album-3.png")}
            alt="Album three"
            data-action="https://doce.cc/"
          />
          <img
            src={require("../Images/album-4.png")}
            alt="Album four"
            data-action="http://tw.yahoo.com"
          />
        </Coverflow>
        <MoviecardGrid/>
      </div>
    );
  }
}
export default Home;
