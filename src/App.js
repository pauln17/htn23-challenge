// Libraries
import React, { useState, useEffect } from 'react';

// Components
import HeroText from './components/HeroText';
import Navbar from './components/Navbar';

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
      
    </>
  );
}

export default App;
