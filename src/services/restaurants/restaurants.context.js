import React, { useState, useEffect, createContext, useMemo } from "react";

import { restaurantRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestauranats = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantRequest()
                .then(restaurantTransform)
                .then((results) => {
                    setRestaurants(results);
                })
                .catch((err) => setError(err))
                .finally(() => {
                    setIsLoading(false);
                });
        }, 2000);
    };

    useEffect(() => {
        retrieveRestauranats();
    }, []);

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
