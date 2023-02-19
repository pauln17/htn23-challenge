// Libraries
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin, FaTiktok} from 'react-icons/fa';

// CSS
import '../styles/Navbar.css';

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
                <ul className="navbar-socials">
                    <li><a target="_blank" href="https://www.instagram.com/hackthenorth/"><FaInstagram className="socials one"/></a></li>
                    <li><a target="_blank" href="https://www.facebook.com/hackthenorth/"><FaFacebookF className="socials two"/></a></li>
                    <li><a target="_blank" href="https://twitter.com/hackthenorth"><FaTwitter className="socials three"/></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/company/hack-the-north"><FaLinkedin className="socials four"/></a></li>
                    <li><a target="_blank" href="https://www.tiktok.com/@hackthenorth"><FaTiktok className="socials five"/></a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;