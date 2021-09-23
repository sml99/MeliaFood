import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurantDetail.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantsStack.Navigator screenOptions={{ presentation: "modal" }}>
            <RestaurantsStack.Screen
                name="RestaurantsList"
                component={RestaurantsScreen}
                options={{ headerShown: false }}
            />
            <RestaurantsStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
                options={{ headerShown: false }}
            />
        </RestaurantsStack.Navigator>
    );
};
