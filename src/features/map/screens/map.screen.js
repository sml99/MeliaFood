import React, { useState, useContext, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

export const MapScreen = () => {
    const [latDelta, setLatDelta] = useState(0);

    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);
    const { lat, lng, viewport } = location;

    useEffect(() => {
        if (!viewport?.northeast || !viewport?.southwest) {
            console.log("Map.Screen : invalid location object!");
            console.log(`location : ${location}`);
            return;
        }
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;
        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);

    return (
        <SafeArea>
            <Search />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}
            >
                {restaurants.map((restaurant) => {
                    return (
                        <MapView.Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng,
                            }}
                        >
                            <MapView.Callout>
                                <MapCallout restaurant={restaurant} />
                            </MapView.Callout>
                        </MapView.Marker>
                    );
                })}
            </Map>
        </SafeArea>
    );
};
