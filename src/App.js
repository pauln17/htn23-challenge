// Libraries
import React, { useState, useEffect } from 'react';

// Components
import HeroText from './components/HeroText';
import ImageSlider from './components/ImageSlider';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/imageSlider.css';

// Images
import p1 from './assets/p1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';
import p5 from './assets/p5.png';
import p6 from './assets/p6.png';
import p7 from './assets/p7.png';
import p8 from './assets/p8.png';
import p9 from './assets/p9.png';

// API URL
const EVENTS_API_URL = 'https://api.hackthenorth.com/v3/events/';

const slides = [
    {url: `${p1}`, title: "Image"},
    {url: `${p2}`, title: "Image"},
    {url: `${p3}`, title: "Image"},
    {url: `${p4}`, title: "Image"},
    {url: `${p5}`, title: "Image"},
    {url: `${p6}`, title: "Image"},
    {url: `${p7}`, title: "Image"},
    {url: `${p8}`, title: "Image"},
    {url: `${p9}`, title: "Image"},
  ];

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
      <HeroText />
      <div class="imageSlider">
        <ImageSlider slides={slides} parentWidth={250} />
      </div>
    </>
  );
}

export default App;
