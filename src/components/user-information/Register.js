// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../../styles/register.css';

const Register = () => {
    return (
        <>
          <div className="register-container">  
                <div className="forms-container">
                    <div className="register-hero">
                        <h3>Registration</h3>
                    </div>

                    <form className="register-form">
                        <div className="input">
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" required/>
                        </div>
                        <div className="input">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" required/>
                        </div>
                        <div className="input">
                            <label for="password_confirmation">Password Confirmation</label>
                            <input type="password" id="password_confirmation" name="password_confirmation" required/>
                        </div>
                    </form>

                    <div className="links">
                        <Link to={"/"} style={{ textDecoration: 'none' }}>
                            <h6>Home</h6>
                        </Link>
                        <Link to={"/login"} style={{ textDecoration: 'none' }}>
                            <h6>Login</h6>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;