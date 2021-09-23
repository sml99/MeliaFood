import React, { useState, useContext, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

export const MapScreen = () => {
    const [latDelta, setLatDelta] = useState(0);
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);
    const { viewport } = location;

    useEffect(() => {
        if (!viewport?.northeast || !viewport?.southwest) {
            console.log("Map.Screen : invalid location object!");
            console.log("NIKMOK L 9AHBA ");
            console.log(`location : ${location}`);
            return;
        }
        const northeastLat = viewport.northeast;
        const southwestLat = viewport.southwest;
        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);

    return (
        <SafeArea>
            <Search />
            <Map></Map>
        </SafeArea>
    );

    // {
    //     restaurants.map((restaurant) => {
    //         return (
    //             <MapView.Marker
    //                 key={restaurant.name}
    //                 coordinate={{ latitude: latDelta }}
    //             ></MapView.Marker>
    //         );
    //     });
    // }
};
