import React from "react";
import styled from "styled-components";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import {
    useFonts as useOswald,
    Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { Text } from "./src/components/typography/text.component";

export default function App() {
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });
    const [latoLoaded] = useLato({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    function HomeScreen() {
        return <RestaurantsScreen />;
    }

    const SettingScreen = styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
    `;

    function SettingsScreen() {
        return (
            <SettingScreen>
                <Text>Settings!</Text>
            </SettingScreen>
        );
    }

    function MapScreen() {
        return (
            <SettingScreen>
                <Text>Settings!</Text>
            </SettingScreen>
        );
    }

    const Tab = createBottomTabNavigator();
    return (
        <>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                if (route.name === "Restaurants") {
                                    return (
                                        <Ionicons
                                            name={
                                                focused
                                                    ? "restaurant-outline"
                                                    : "restaurant"
                                            }
                                            size={size}
                                            color={color}
                                        />
                                    );
                                } else if (route.name === "Settings") {
                                    return (
                                        <Ionicons
                                            name={
                                                focused
                                                    ? "settings-outline"
                                                    : "settings"
                                            }
                                            size={size}
                                            color={color}
                                        />
                                    );
                                } else if (route.name === "Map") {
                                    return (
                                        <Ionicons
                                            name={
                                                focused ? "map-outline" : "map"
                                            }
                                            size={size}
                                            color={color}
                                        />
                                    );
                                }
                            },
                            tabBarInactiveTintColor: "gray",
                            tabBarActiveTintColor: "tomato",
                        })}
                    >
                        <Tab.Screen name="Restaurants" component={HomeScreen} />
                        <Tab.Screen name="Map" component={MapScreen} />
                        <Tab.Screen
                            name="Settings"
                            component={SettingsScreen}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
}
