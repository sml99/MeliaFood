import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";

import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

export const AppNavigator = () => {
    const SettingScreen = styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
    `;

    function SettingsScreen() {
        return (
            <SafeArea>
                <SettingScreen />
            </SafeArea>
        );
    }

    const Spacing = styled.View`
        background-color: #fff;
        height: 12px;
    `;

    const Tab = createBottomTabNavigator();

    const TAB_ICON = {
        Restaurants: "restaurant",
        Map: "map",
        Settings: "settings",
    };

    const screenOptions = ({ route: { name } }) => ({
        tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
                name={focused ? TAB_ICON[name] : TAB_ICON[name] + "-outline"}
                size={size}
                color={color}
            />
        ),
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "tomato",
    });

    return (
        <>
            <NavigationContainer>
                <Tab.Navigator screenOptions={screenOptions}>
                    <Tab.Screen
                        name="Restaurants"
                        component={RestaurantsNavigator}
                        options={{ headerShown: false }}
                    />
                    <Tab.Screen
                        name="Map"
                        component={MapScreen}
                        options={{ headerShown: false }}
                    />
                    <Tab.Screen
                        name="Settings"
                        component={SettingsScreen}
                        options={{ headerShown: false }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
            <Spacing />
        </>
    );
};
