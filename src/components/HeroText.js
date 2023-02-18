// Libraries
import Typed from 'react-typed';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/heroText.css';

const HeroText = () => {
    return (
        <div className="container">
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center mt-5">
                <h1 className="hero-text">Introducing Canada's <span className="word1">largest</span> hackathon where <span className="word2">anyone</span> can <span className="word3">spark</span> their passion for {' '}
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
            </div>
            <div className="browse-events-container">
                <h3>Upcoming Events</h3>
                <button type="button" className="btn btn-outline-primary">See Private Events</button>
            </div>
        </div>
    );
}

export default HeroText;