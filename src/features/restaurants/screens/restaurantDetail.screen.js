import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetails = ({ route }) => {
    const restaurant = route.params.item;
    console.log(restaurant.name);
    return (
        <SafeArea>
            <Text>TEXT</Text>
        </SafeArea>
    );
};
