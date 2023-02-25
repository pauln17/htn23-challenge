// Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import app from '../user-info/Firebase';

// CSS
import '../../styles/user-info/user.css';

// Hooks
import { useAuthStatus } from '../../hooks/useAuthStatus';

// CSS
import '../../styles/main-page/navbar.css';

const auth = getAuth(app);

const Navbar = () => {

    const {isAuth, email} = useAuthStatus();

    const handleLogout = () => {
        auth.signOut();
    }

    return (
        <>
            <nav className="navBar">
                <ul className="navbar-links">
                    <li><a target="_blank" rel="noreferrer" href="https://hackthenorth.com/#about">About</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://hackthenorth.com/#stories">Stories</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://hackthenorth.com/#sponsors">Sponsors</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://hackthenorth.com/#faq">FAQ</a></li>
                </ul>
                {isAuth ? (
                    <div className="user-info">
                        <div className="user-email">
                            <h3>{email}</h3>
                        </div>
                        <div className="logout">
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                ) : (
                    <div className="register">
                        <Link to={"/login"} style={{ textDecoration: 'none' }}>
                            <h3>Login</h3>
                        </Link>
                        <Link to={"/register"} style={{ textDecoration: 'none' }}>
                            <h3>Register</h3>
                        </Link>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;