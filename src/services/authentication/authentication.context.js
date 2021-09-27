import React, { useEffect, useState, createContext } from "react";
import firebase from "firebase";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    firebase.auth().onAuthStateChanged((usr) => {
        if (usr) {
            setUser(usr);
        }
        setIsLoading(false);
    });

    const onLogin = (email, password) => {
        setIsLoading(true);
        console.log(isLoading);
        loginRequest(email, password)
            .then((authenticatedUser) => {
                setUser(authenticatedUser);
            })
            .catch((e) => {
                setError(e.toString());
            })
            .finally(() => {
                // setIsLoading(false);
            });
    };

    const onRegister = (email, password, repeatedPassword) => {
        if (password !== repeatedPassword) {
            setError("Error: Password do not match");
            return;
        }
        setIsLoading(true);
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((authenticatedUser) => {
                setUser(authenticatedUser);
            })
            .catch((e) => {
                setError(e.toString());
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const onLogout = () => {
        setUser(null);
        firebase.auth().signOut();
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};
