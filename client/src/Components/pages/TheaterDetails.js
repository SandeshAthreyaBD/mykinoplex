import React from "react";
import {MDBContainer, CardBody} from 'mdbreact';
import { Card } from "react-bootstrap";


const TheaterDetails = ({ theaterInfo, EditorDeleteTheater }) => { 
    return (
        <MDBContainer>
            <Card onClick={() => {EditorDeleteTheater(theaterInfo.id)}}>
                <CardBody>
                        <h6>TheaterName: {theaterInfo.TheaterName}</h6>
                        <h6>Address: {theaterInfo.Street},{theaterInfo.City},{theaterInfo.PLZ}</h6>
                        <h6>Country: {theaterInfo.Country}</h6>
                </CardBody>
            </Card>
        </MDBContainer>
    );
};

export default TheaterDetails;