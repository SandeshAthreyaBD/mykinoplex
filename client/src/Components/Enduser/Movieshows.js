import React, { Component } from "react";
import "../Styles/Movieshows.css";
// eslint-disable-next-line
import { Card, Button } from "react-bootstrap";
import { MDBContainer } from "mdbreact";
import Slider from "react-slick";

// class Movieshows extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       slidesPerRow: 3,
//       slidesToScroll: 1
//     };
//     return (
//       <div className="container">
//         <Slider {...settings}>
//           <div>
//             <img src="http://placekitten.com/g/400/200" />
//           </div>
//           <div>
//             <img src="http://placekitten.com/g/400/200" />
//           </div>
//           <div>
//             <img src="http://placekitten.com/g/400/200" />
//           </div>
//           <div>
//             <img src="http://placekitten.com/g/400/200" />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

const Movieshows = () => {
  var settings = {
    slidesPerRow: 4,
    arrows: true,
  };
  return (
    <MDBContainer>
      <Slider {...settings}>
        <div>
          <Card border="dark" style={{width:"14rem"}}>
            <Card.Body>
              <Card.Text>
                <div>
                  <h6 className="cardsubtitle">Kannada</h6>
                  <h6 className="cardsubtitle">26/02/2019</h6>
                  <h6 className="cardsubtitle">17:00 CET</h6>
                  <h6 className="cardsubtitle">
                    Cinmemaxx, Mannheim <br />
                    68169
                  </h6>
                  <Button href="#!">Book Now</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card border="dark" style={{width:"14rem"}}>
            <Card.Body>
              <Card.Text>
                <div>
                  <h6 className="cardsubtitle">Kannada</h6>
                  <h6 className="cardsubtitle">26/02/2019</h6>
                  <h6 className="cardsubtitle">17:00 CET</h6>
                  <h6 className="cardsubtitle">
                    Cinmemaxx, Mannheim <br />
                    68169
                  </h6>
                  <Button href="#!">Book Now</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card border="dark" style={{width:"14rem"}}>
            <Card.Body>
              <Card.Text>
                <div>
                  <h6 className="cardsubtitle">Kannada</h6>
                  <h6 className="cardsubtitle">26/02/2019</h6>
                  <h6 className="cardsubtitle">17:00 CET</h6>
                  <h6 className="cardsubtitle">
                    Cinmemaxx, Mannheim <br />
                    68169
                  </h6>
                  <Button href="#!">Book Now</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card border="dark" style={{width:"14rem"}}>
            <Card.Body>
              <Card.Text>
                <div>
                  <h6 className="cardsubtitle">Kannada</h6>
                  <h6 className="cardsubtitle">26/02/2019</h6>
                  <h6 className="cardsubtitle">17:00 CET</h6>
                  <h6 className="cardsubtitle">
                    Cinmemaxx, Mannheim <br />
                    68169
                  </h6>
                  <Button href="#!">Book Now</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card border="dark" style={{width:"14rem"}}>
            <Card.Body>
              <Card.Text>
                <div>
                  <h6 className="cardsubtitle">Kannada</h6>
                  <h6 className="cardsubtitle">26/02/2019</h6>
                  <h6 className="cardsubtitle">17:00 CET</h6>
                  <h6 className="cardsubtitle">
                    Cinmemaxx, Mannheim <br />
                    68169
                  </h6>
                  <Button href="#!">Book Now</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card border="dark" style={{width:"14rem"}}>
            <Card.Body>
              <Card.Text>
                <div>
                  <h6 className="cardsubtitle">Kannada</h6>
                  <h6 className="cardsubtitle">26/02/2019</h6>
                  <h6 className="cardsubtitle">17:00 CET</h6>
                  <h6 className="cardsubtitle">
                    Cinmemaxx, Mannheim <br />
                    68169
                  </h6>
                  <Button href="#!">Book Now</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Slider>
    </MDBContainer>
  );
};

export default Movieshows;
