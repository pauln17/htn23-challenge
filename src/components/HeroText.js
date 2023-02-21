// Libraries
import Typed from 'react-typed';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/heroText.css';

const HeroText = () => {
    return (
        <div className="section container">
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center mt-5">
                <h1 className="hero-text">Hack the North is Canada's <span className="word-1">largest</span> hackathon where <span className="word-2">anyone</span> can <span className="word-3">spark</span> their passion for {' '}
                <Typed
                    className="type-animation-strings"
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
        </div>
    );
}

export default HeroText;