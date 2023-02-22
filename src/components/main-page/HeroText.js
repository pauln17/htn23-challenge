// Libraries
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main-page/heroText.css';

const HeroText = () => {
    return (
        <div className="section container">
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center mt-5">
                <h1 className="hero-text">Hack the North is Canada's <span className="word-1">largest</span> hackathon where <span className="word-2">anyone</span> can <span className="word-3">spark</span> their passion for {' '}
                    <span className="typewriter-span"><Typewriter
                        className="type-animation-strings"
                        words={['design', 'learning', 'code', 'building', 'connection', 'exploring']}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={150}
                        delaySpeed={1500}
                    /></span>
                </h1>
            </div>
        </div>
    );
}

export default HeroText;