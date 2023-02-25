// Libraries
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './Firebase';

// CSS
import '../../styles/user-info/user.css';

const auth = getAuth(app);

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
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
                        <h3>Login</h3>
                    </div>

                    <form className="user-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button className="user-button" submit="false" onClick={login} disabled={!(email.match(/\S+@\S+\.\S+/) && password.length === 6)}>Sign In</button>
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