// Libraries
import React from 'react';

// CSS
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navBar">
                <ul className="navbar-links">
                    <li><a target="_blank" href="https://hackthenorth.com/#about">About</a></li>
                    <li><a target="_blank" href="https://hackthenorth.com/#stories">Stories</a></li>
                    <li><a target="_blank" href="https://hackthenorth.com/#sponsors">Sponsors</a></li>
                    <li><a target="_blank" href="https://hackthenorth.com/#faq">FAQ</a></li>
                </ul>
                <div className="register">
                    <h3>Login</h3>
                    <h3>Register</h3>
                </div>
            </nav>
        </>
    );
}

export default Navbar;