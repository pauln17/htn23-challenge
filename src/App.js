// Libraries
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

// Components
import Navbar from './components/Navbar';
import HeroText from './components/HeroText';
import EventCard from './components/EventCard';
import Footer from './components/Footer';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

// API URL
const EVENTS_API_URL = 'https://api.hackthenorth.com/v3/events/';

const App = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data from URL
  const searchEvents = async (searchTerm) => {
    const response = await fetch(`${EVENTS_API_URL}`);
    const data = await response.json();

    let filteredData = data.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filteredData.length === 0) {
      filteredData = data
    }

    setEvents(filteredData)
  }

  useEffect(() => {
    searchEvents(searchTerm);
  }, [searchTerm, searchEvents]);


  return (
    <>
      <Navbar />

      <HeroText />

      <div className="events-container">
        <div className="events-container-header">
          <div className="browse-events-container">
            <h3>Upcoming Events</h3>
          </div>

          <div className="search-bar">
            <input placeholder='Search' value={searchTerm} onChange = {(e) => setSearchTerm(e.target.value)}></input>
            <FaSearch className="search-icon" onClick={() => searchEvents(searchTerm)}/>
          </div>
        </div>

        <div className="event-cards">
          {events.map((event) => {
            return (
              <EventCard event={event} />
            )
          })}
        </div>
      </div>
      
      <Footer />

    </>
  );
}

export default App;
