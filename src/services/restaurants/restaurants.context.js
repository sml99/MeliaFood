import React, { useState, useEffect, createContext } from "react";
import { useContext } from "react/cjs/react.development";

import { LocationContext } from "../location/location.context";
import { restaurantRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    const { location } = useContext(LocationContext);
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestauranats = (loc) => {
        setIsLoading(true);
        setRestaurants([]);

        setTimeout(() => {
            restaurantRequest(loc)
                .then(restaurantTransform)
                .then((results) => {
                    setRestaurants(results);
                })
                .catch((err) => setError(err))
                .finally(() => {
                    setIsLoading(false);
                });
        }, 500);
    };

    useEffect(() => {
        if (location && location.lat && location.lng) {
            const formattedLocation = location.lat + "," + location.lng;

            retrieveRestauranats(formattedLocation);
        } else retrieveRestauranats();
    }, [location]);

    return (
        <RestaurantContext.Provider
            value={{
                restaurants,
                isLoading,
                error,
            }}
        >
            {children}
        </RestaurantContext.Provider>
    );
};
