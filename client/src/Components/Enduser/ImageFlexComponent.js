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
          
         // style={{ backgroundColor: "#1C2331" }}
        >
       <MDBContainer fluid className="mt-5">
          <MDBRow>
            <MDBCol>
              <img 
              resizeMode={'cover'}
              style={{width:250, height: 350}}
              src={require("../../Images/bell.jpg")}
              className="d-block" 
              alt="flex" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </div>
    );
};

export default ImageFlex;