import React, { useState, createContext, useEffect } from "react";
import firebase from "firebase/app";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then((authenticatedUser) => {
                setUser(authenticatedUser);
            })
            .catch((e) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};
