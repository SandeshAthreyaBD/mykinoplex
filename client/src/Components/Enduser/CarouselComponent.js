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
              src="https%3A%2F%2Fimages.pexels.com%2Fphotos%2F248797%2Fpexels-photo-248797.jpeg"
              data-action="http://www.mykinoplex.com"
            />
          </Coverflow>
        </div>
      </StyleRoot>
    );
  }
}
export default CarouselComponent;
