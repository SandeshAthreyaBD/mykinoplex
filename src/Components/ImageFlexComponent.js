import React from 'react';
import {
    MDBCol,
    MDBRow,
    MDBContainer
} from 'mdbreact';

const ImageFlex = () =>{
    return(
        <div
          media={{
            "@media (max-width: 900px)": {
              width: "600px",
              height: "300px"
            },
            "@media (min-width: 900px)": {
              width: "960px",
              height: "600px"
            }
          }}
          
          style={{ backgroundColor: "#1C2331" }}
        >
       <MDBContainer fluid className="mt-5">
          <MDBCol className="w-auto">
            <img 
            src={require("../Images/bell.jpg")}
            className="d-block w-100" 
            alt="flex" />
          </MDBCol>
        </MDBContainer>
        </div>
    );
};

export default ImageFlex;