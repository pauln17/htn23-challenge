// Libraries
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/eventCard.css';

const EventCard = ({ event: { description, event_type, id, name, permission, private_url, public_url, speakers, start_time } }) => {
    return (
        <>
            <Card className="card" style={{ width: '18rem' }}>
                <a target="_blank" className="card-info-link" {...public_url && {href: public_url}}>
                    <Card.Img variant="top" src={ 'https://i.imgur.com/SZFa3wf.png' }/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    {speakers[0] && (
                        <ListGroup.Item><strong>Speaker:</strong> {speakers[0].name}</ListGroup.Item>
                    )}                
                        <ListGroup.Item><strong>Start Time (EST):</strong> {new Date(start_time).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day : 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'})}</ListGroup.Item>
                        <ListGroup.Item><strong>Category:</strong> {event_type}</ListGroup.Item>
                    </ListGroup>
                </a>
            </Card> 
        </>
    );
}

export default EventCard