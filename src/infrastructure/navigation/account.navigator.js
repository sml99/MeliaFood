import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { AccountScreen } from "../../features/account/screens/account.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={AccountScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
};
