import { useState, useEffect, useCallback } from "react";
import { getAuth } from "firebase/auth";
import app from '../components/user-info/Firebase';
const auth = getAuth(app);

export const useAuthStatus = () => {
    const [ isAuth, setAuthStatus ] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) { 
                setAuthStatus(true);
                setEmail(user.email);
            } else {
                setAuthStatus(false);
            }
        });
        return unsubscribe;
    });

    return {isAuth, email};
};