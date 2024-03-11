// src/context/theme.context.jsx
import axios from "axios";
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const API_URL = "http://localhost:5005"

    const [userInfo, setUserInfo] = useState(null);

    const authenticateUser = () => {   //machine to check ticket
        const storedToken = localStorage.getItem('authToken'); // human checking pocket for ticket
        if (storedToken) { //if I have the the ticket
            axios
                .get(`${API_URL}/auth/verify`, // putting the ticket inside the machine
                    { headers: { Authorization: `Bearer ${storedToken}` } } // machine reading the ticket
                )
                .then((response) => { // ticket accepted
                    const user = response.data;
                    console.log(user);
                    setIsLoggedIn(true); 
                    setIsLoading(false);
                    setUserInfo(user);
                })

                .catch((error) => { // ticket rejected
                    setIsLoggedIn(false);
                    setIsLoading(false);
                    setUser(null);
                });     
                
        }
    }

    useEffect(() => {
    authenticateUser()
    }, []);

    const logoutUser = () => {
        localStorage.removeItem('authToken'); 
        setIsLoggedIn(false); 
        setUserInfo(null); 
    };

    const storeToken = (token) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{ userInfo, setUserInfo, storeToken, authenticateUser, logoutUser, isLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    );

}

export { AuthContext, AuthProviderWrapper };   // <== UPDATE
