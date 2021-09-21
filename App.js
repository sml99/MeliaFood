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
import { SafeArea } from "./src/components/utility/safe-area.component";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";

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
            <SafeArea>
                <SettingScreen>
                    <Text>Settings!</Text>
                </SettingScreen>
            </SafeArea>
        );
    }

    function MapScreen() {
        return (
            <SafeArea>
                <SettingScreen>
                    <Text>Settings!</Text>
                </SettingScreen>
            </SafeArea>
        );
    }

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

    const Spacing = styled.View`
        background-color: #fff;
        height: 12px;
    `;

    return (
        <>
            <ThemeProvider theme={theme}>
                <RestaurantContextProvider>
                    <NavigationContainer>
                        <Tab.Navigator screenOptions={screenOptions}>
                            <Tab.Screen
                                name="Restaurants"
                                component={HomeScreen}
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
                </RestaurantContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
}
