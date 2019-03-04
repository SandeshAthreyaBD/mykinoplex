import React, { Component } from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

class CarouselComponent extends Component {
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
      <StyleRoot>
        <div
          media={{
            "@media (max-width: 900px)": {
              width: "960px",
              height: "600px"
            },
            "@media (min-width: 900px)": {
              width: "960px",
              height: "600px"
            }
          }}
          style={{ backgroundColor: "#1C2331" }}
        >
          <Coverflow
            width={960}
            height={470}
            displayQuantityOfSide={3}
            // navigation={true}
            enableHeading={false}
            active={this.state.active}
            infiniteScroll={true}
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
              src={require("../../Images/aquaman.jpg")}
              alt="Album two"
              data-action="http://www.mykinoplex.com"
            />
            <img
              src={require("../../Images/Gully.jpg")}
              alt="Album two"
              data-action="http://www.mykinoplex.com"
            />
            <img
              src={require("../../Images/kgf.jpg")}
              alt="Album two"
              data-action="http://www.mykinoplex.com"
            />
            <img
              src={require("../../Images/manikarnika.jpg")}
              alt="Album two"
              data-action="http://www.mykinoplex.com"
            />
            <img
              src={require("../../Images/uri.jpg")}
              alt="Album two"
              data-action="http://www.mykinoplex.com"
            />
            <img
              src={require("../../Images/aquaman.jpg")}
              alt="Album three"
              data-action="https://www.mykinoplex.com"
            />
            <img
              src={require("../../Images/Gully.jpg")}
              alt="Album four"
              data-action="http://www.mykinoplex.com"
            />
            <img
              src={require("../../Images/kgf.jpg")}
              alt="Album five"
              data-action="http://www.mykinoplex.com"
            />
            <img
              src={require("../../Images/manikarnika.jpg")}
              alt="Album six"
              data-action="https://www.mykinoplex.com"
            />
            <img
              src={require("../../Images/uri.jpg")}
              alt="Album seven"
              data-action="http://www.mykinoplex.com"
            />
            <img
              src={require("../../Images/aquaman.jpg")}
              alt="Album one"
              data-action="https://www.mykinoplex.com"
            />
            <img
              src={require("../../Images/Gully.jpg")}
              alt="Album two"
              data-action="http://www.mykinoplex.com"
            />
            <img
              src={require("../../Images/kgf.jpg")}
              alt="Album three"
              data-action="https://www.mykinoplex.com"
            />
            <img
              src={require("../../Images/manikarnika.jpg")}
              alt="Album four"
              data-action="http://www.mykinoplex.com"
            />
          </Coverflow>
        </div>
      </StyleRoot>
    );
  }
}
export default CarouselComponent;
