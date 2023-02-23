// Libraries
import React, { useState, useEffect, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';
import Plx from "react-plx";

// Components
import Navbar from './Navbar';
import HeroText from './HeroText';
import { EventCard, toProperCase } from './EventCard';
import Footer from './Footer';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main-page/home.css';

// API URL
const EVENTS_API_URL = 'https://api.hackthenorth.com/v3/events/';

const Home = () => {
  // React Hooks
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');


  // Fetch & Modify Data from URL
  const getEvents = useCallback(async (searchTerm, category) => {
    const response = await fetch(`${EVENTS_API_URL}`);
    const data = await response.json();

    let filteredData = data;

    // Filter for Search Bar
    if (searchTerm) {
      filteredData = data.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (category) {
      filteredData = data.filter(event => toProperCase(event.event_type).includes(category));
    }

    if (filteredData.length === 0) {
      filteredData = data
    }

    filteredData.sort((a, b) => a.start_time - b.start_time);

    setEvents(filteredData)
  }, [setEvents]);

  // Render w/ Dependencies [searchTerm, getEvents] -- run everytime these functions are called/changed
  useEffect(() => {
    getEvents(searchTerm, category);
  }, [searchTerm, category, getEvents]);

  return (
    <>
          <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              },
              {
                startValue: 0,
                endValue: 350,
                property: "translateY"
              },
            ]
          }
        ]}
      >
        <Navbar/>
      </Plx>
      
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              },
              {
                startValue: 0,
                endValue: 350,
                property: "translateY"
              },
            ]
          }
        ]}
      >
        <HeroText />
      </Plx>
      


      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity"
              },
              {
                startValue: 200,
                endValue: 500,
                property: "translateY"
              },
            ]
          }
        ]}
      >
        <div className="events-container">
          <div className="events-container-header">
            <div className="browse-events-container">
              <h3>Upcoming Events</h3>
            </div>

            <div className="optionals">
              <form className="category-form">
                <select onChange = {(e) => setCategory(e.target.value)}>
                  <option value="All">All</option>
                  <option value="Activity">Activity</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Tech Talk">Tech Talk</option>
                </select>      
              </form>
              <div className="search-bar">
                <input placeholder='Search' value={searchTerm} onChange = {(e) => setSearchTerm(e.target.value)}></input>
                <FaSearch className="search-icon" onClick={() => getEvents(searchTerm)}/>
              </div>
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
      </Plx>
      
    </>
  );
}

export default Home;
