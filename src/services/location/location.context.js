import React, { useState, createContext, useEffect } from "react";
import { locations } from "./location.mock";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    };

    useEffect(() => {
        locationRequest()
            .then(locationTransform)
            .then((result) => {
                setLocation(result);
            })
            .catch((err) => {
                console.log("Location.context 24 : " + err);
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        if (!keyword.length) {
            return;
        }
        locationRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setLocation(result);
            })
            .catch((err) => {
                console.log("Location.context 24 : " + err);
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [keyword]);

    return (
        <LocationContext.Provider
            value={{
                location,
                isLoading,
                error,
                search: onSearch,
                keyword,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};
