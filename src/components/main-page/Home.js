// Libraries
import React, { useState, useEffect, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';

// Components
import Navbar from './Navbar';
import HeroText from './HeroText';
import EventCard from './EventCard';
import Footer from './Footer';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/home.css';

// API URL
const EVENTS_API_URL = 'https://api.hackthenorth.com/v3/events/';

const Home = () => {
  // React Hooks
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch & Modify Data from URL
  const getEvents = useCallback(async (searchTerm) => {
    const response = await fetch(`${EVENTS_API_URL}`);
    const data = await response.json();

    let filteredData = data;

    // Filter for Search Bar
    if (searchTerm) {
      filteredData = data.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));

      // In the scenario of no results, then just reset to original data (all events)
      if (filteredData.length === 0) {
        filteredData = data
      }
    }

    setEvents(filteredData)
  }, [setEvents]);

  // Render w/ Dependencies [searchTerm, getEvents] -- run everytime these functions are called/changed
  useEffect(() => {
    getEvents(searchTerm);
  }, [searchTerm, getEvents]);

  return (
    <>
      <Navbar/>
      <HeroText />
      <div className="events-container">
        <div className="events-container-header">
          <div className="browse-events-container">
            <h3>Upcoming Events</h3>
          </div>

          <div className="search-bar">
            <input placeholder='Search' value={searchTerm} onChange = {(e) => setSearchTerm(e.target.value)}></input>
            <FaSearch className="search-icon" onClick={() => getEvents(searchTerm)}/>
          </div>
        </div>

        <div className="event-cards">
          {/* Dynamically add event cards based on events object containing each event after all filters */}
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

export default Home;
