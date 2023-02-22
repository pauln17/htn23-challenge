// Libraries
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main-page/eventCard.css';

function toProperCase(str) {
    const noUnderscores = str.replace(/_/g, ' ');
    const capitalized = noUnderscores.replace(/(^|\s)\S/g, function(firstLetter) {
      return firstLetter.toUpperCase();
    });
    return capitalized;
}

const EventCard = ({ event: { description, event_type, id, name, permission, private_url, public_url, speakers, start_time } }) => {
 
    // (Capitalizes String & Removes Underscore) -- event_type formatting


    return (
        <>
            <Card className="card h-100 w-100" style={{ width: '18rem' }}>
                <a className="card-info-link" {...public_url && {href: public_url, target: "_blank", rel: "noreferrer"}}>
                    <div className="cards-content-container">
                        <div>
                            <Card.Img className="card-img" variant="top" src='https://i.imgur.com/SZFa3wf.png'/>
                            <Card.Body>
                                <Card.Title className="card-title">{name}</Card.Title>
                                <Card.Text className="event-type">{toProperCase(event_type)}</Card.Text>
                                <Card.Text className="card-text">{description}</Card.Text>
                            </Card.Body>
                        </div>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item></ListGroup.Item>
                            {speakers[0] && (
                                <ListGroup.Item><strong>Speaker:</strong> {speakers[0].name}</ListGroup.Item>
                            )}                
                                <ListGroup.Item><strong>Start Time (EST):</strong> {new Date(start_time).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day : 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'})}</ListGroup.Item>
                        </ListGroup>
                    </div>
                </a>
            </Card> 
        </>
    );
}

export { EventCard, toProperCase };