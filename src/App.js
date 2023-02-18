// Libraries
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Typed from 'react-typed';

// Components
import NavbarComponent from './components/NavbarComponent';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// API URL
const EVENTS_API_URL = 'https://api.hackthenorth.com/v3/events/';

function App() {
  const [events, setEvents] = useState([]);

  // Fetch data from URL
  const searchEvents = async (eventId) => {
    const response = await fetch(`${EVENTS_API_URL}${eventId}`);
    const data = await response.json();

    setEvents(data)
  }

  useEffect(() => {
    searchEvents('')
  }, [])

  return (
    <>
      <NavbarComponent/>
      <Container className="text-center">
        <h1>Hack the North is Canada's <span className="word1">biggest</span> hackathon where <span className="word2">anyone</span> can <span className="word3">spark</span> their passion for {' '}
          <Typed
            strings = {[
              "design",
              "learning",
              "code",
              "building",
              "connection",
              "exploring",
            ]}
            typeSpeed={75}
            backSpeed={100}
            loop
          />
        </h1>
      </Container>


    </>
  );
}

export default App;
