import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem('token'));
    const [ user, setUser ] = useState(() => localStorage.getItem('user'));

    const login = (userToken, userName) => {
        setToken(userToken);
        setUser(userName);
        localStorage.setItem('token', userToken);
        localStorage.setItem('user', userName);
    };
    

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };
    

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    } else{
        return context;
    }
}