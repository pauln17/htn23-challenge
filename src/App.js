// Libraries
import React, { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import HeroText from './components/HeroText';
import EventCard from './components/EventCard';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

// API URL
const EVENTS_API_URL = 'https://api.hackthenorth.com/v3/events/';

const App = () => {
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
      <Navbar />
      <HeroText />
      <div className="events-container">
        {events.map((event) => {
          return (
            <EventCard event={event} />
          )
        })}
      </div>
    </>
  );
}

export default App;
