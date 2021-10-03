import React, { useState, createContext } from "react";
import firebase from "firebase";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState();
    const [registerError, setRegisterError] = useState();

    firebase.auth().onAuthStateChanged((usr) => {
        if (usr) {
            setUser(usr);
        }
        // setIsLoading(false);
    });

    const onLogin = (email, password) => {
        setLoginError(null);
        setIsLoading(true);
        loginRequest(email, password)
            .then((authenticatedUser) => {
                setUser(authenticatedUser);
            })
            .catch((e) => {
                setLoginError(e.toString());
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const onRegister = (email, password, repeatedPassword) => {
        if (password !== repeatedPassword) {
            setRegisterError("Error: Password do not match");
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
                setRegisterError(e.toString());
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
                loginError,
                registerError,
                onLogin,
                onRegister,
                onLogout,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};
