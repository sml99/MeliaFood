import React from "react";
import { Text } from "react-native";

export const RestaurantDetails = ({ name = "Western" }) => {
    return <Text>{name}</Text>;
};
