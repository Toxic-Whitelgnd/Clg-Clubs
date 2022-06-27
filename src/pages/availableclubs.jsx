import React from "react";
import "../styles/availableclubs.css"
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import data from "../API/avclubapi"


export default function AvailableClub(){
    return(
        <>
        <div className="acHeader">
            <h1>Available clubs</h1>

        </div>
        <div className="Containers">
        {/* need to start code from here */}
        {/* <form>
            <label htmlfor="search">Search</label>
            <input id="search" type="search" pattern=".*\S.*" required/>
            <span className="caret"></span>
        </form> */}
        <div className="avContainer">
            <div className="containerwrap">
               {
                   data.map((value, index) =>{
                       return (
                       <Card  className="CardsContainer" key={index} style={{ width: '14rem' ,height: 'auto',borderBlockColor:"blue" }} >
                            <Card.Img src={value.image} />
                            <Card.Body className="cardbody">
                                <Card.Title className="cardtitle">{value.title}</Card.Title>
                                <Card.Subtitle className="cardsub">{value.subtitle}</Card.Subtitle>
                            
                                <Card.Text className="carddesc">
                                    {value.desc}
                                </Card.Text>

                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className="leader">👨🏻‍💻     {value.leadername}</ListGroupItem>
                                <ListGroupItem className="coleader">👨🏻‍🤝‍👨🏻   {value.members}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link className="websitelink" href={value.website}>Website</Card.Link>
                                <Card.Link className="joinlink"  href={value.join}>Join</Card.Link>
                            </Card.Body>

                       </Card>
                       )
                   })
               }

            </div>
        </div>
        </div>
        </>
    )
}