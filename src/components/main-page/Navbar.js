// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../../styles/main-page/navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navBar">
                <ul className="navbar-links">
                    <li><a target="_blank" rel="noreferrer" href="https://hackthenorth.com/#about">About</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://hackthenorth.com/#stories">Stories</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://hackthenorth.com/#sponsors">Sponsors</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://hackthenorth.com/#faq">FAQ</a></li>
                </ul>
                <div className="register">
                    <Link to={"/login"} style={{ textDecoration: 'none' }}>
                        <h3>Login</h3>
                    </Link>
                    <Link to={"/register"} style={{ textDecoration: 'none' }}>
                        <h3>Register</h3>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;