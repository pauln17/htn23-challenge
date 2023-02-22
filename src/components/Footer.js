// Libraries
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin, FaTiktok} from 'react-icons/fa';

// CSS
import '../styles/footer.css';

const Footer = () => {
    return (
        <>
            <nav className="footer">
                <ul className="footer-socials">
                    <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/hackthenorth/"><FaInstagram className="socials one"/></a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/hackthenorth/"><FaFacebookF className="socials two"/></a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://twitter.com/hackthenorth"><FaTwitter className="socials three"/></a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/hack-the-north"><FaLinkedin className="socials four"/></a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@hackthenorth"><FaTiktok className="socials five"/></a></li>
                </ul>
            </nav>
        </>
    );
}

export default Footer;