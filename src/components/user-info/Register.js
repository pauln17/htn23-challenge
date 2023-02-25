// Libraries
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './Firebase';

// CSS
import '../../styles/user-info/user.css';

const auth = getAuth(app);

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
          <div className="user-container">  
                <div className="forms-container">
                    <div className="user-hero">
                        <h3>Registration</h3>
                    </div>

                    <form className="user-form">
                        <div className="input">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button className="user-button" onClick={register} disabled={!(email.match(/\S+@\S+\.\S+/) && password.length === 6)}>Create Account</button>
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