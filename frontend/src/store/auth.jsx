import { useContext, useState } from "react";
import { createContext } from "react";

export const AuthContext= createContext();



export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || '');

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    };

    const isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth=()=>{
    const authContextValue= useContext(AuthContext);
    if(!authContextValue){
        throw new Error(`useAuth used outside of the Provider`);
    }
    return authContextValue;
};