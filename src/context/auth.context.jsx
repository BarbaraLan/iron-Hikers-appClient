import axios from "axios";
import { createContext, useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL

const AuthContext = createContext();

function AuthProviderWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [userInfo, setUserInfo] = useState(null);

    const authenticateUser = () => {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
            return axios
                .get(`${API_URL}/auth/verify`,
                    { headers: { Authorization: `Bearer ${storedToken}` } }
                )
                .then((response) => {
                    const user = response.data;
                    setIsLoggedIn(true);
                    setIsLoading(false);
                    setUserInfo(user);
                })
                .catch((error) => {
                    setIsLoggedIn(false);
                    setIsLoading(false);
                    setUserInfo(null);
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
        <AuthContext.Provider value={{ userInfo, setUserInfo, storeToken, authenticateUser, logoutUser, isLoggedIn }}>
            {props.children}
        </AuthContext.Provider>
    );

}

export { AuthContext, AuthProviderWrapper }; 
