import React from "react";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetails } from "../../features/restaurants/screens/restaurantDetail.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantsStack.Navigator
            screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
        >
            <RestaurantsStack.Screen
                name="RestaurantsList"
                component={RestaurantsScreen}
                options={{ headerShown: false }}
            />
            <RestaurantsStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetails}
                options={{ headerShown: false }}
            />
        </RestaurantsStack.Navigator>
    );
};
