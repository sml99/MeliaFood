import React, { useState, useEffect, createContext, useMemo } from "react";
import { locations } from "./location.mock";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("San Francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setKeyword(searchKeyword);
        if (!searchKeyword || !searchKeyword.length) return;
        setIsLoading(true);
        locationRequest(searchKeyword.toLowerCase())
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
    };

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
