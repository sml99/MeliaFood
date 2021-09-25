import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={AccountScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
