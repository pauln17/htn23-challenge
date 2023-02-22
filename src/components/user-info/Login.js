// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../../styles/user-info/user.css';

const Login = () => {
    return (
        <>  
            <div className="user-container">  
                <div className="forms-container">
                    <div className="user-hero">
                        <h3>Login</h3>
                    </div>

                    <form className="user-form">
                        <div className="input">
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" required/>
                        </div>
                        <div className="input">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" required/>
                        </div>
                    </form>

                    <div className="links">
                        <Link to={"/"} style={{ textDecoration: 'none' }}>
                            <h6>Home</h6>
                        </Link>
                        <Link to={"/register"} style={{ textDecoration: 'none' }}>
                            <h6>Register</h6>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;