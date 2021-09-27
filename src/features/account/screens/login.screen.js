import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
    AuthInput,
    Title,
} from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, isLoading, error } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
            <Title>Melia Food</Title>
            <AccountContainer>
                <AuthInput
                    label="Email"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    placeholder="Email"
                    returnKeyType="next"
                    onChangeText={(text) => setEmail(text)}
                />
                <Spacer direction="bottom" size="large" />
                <AuthInput
                    label="Password"
                    value={password}
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    autoCapitalize="none"
                    secureTextEntry
                    returnKeyType="done"
                />
                <Spacer direction="bottom" size="large" />
                {error && (
                    <Spacer direction="bottom" size="large">
                        <Text variant="error">{error}</Text>
                    </Spacer>
                )}
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <AuthButton
                        color
                        icon="lock-open-outline"
                        mode="contained"
                        onPress={() => onLogin(email, password)}
                    >
                        Login
                    </AuthButton>
                )}
                <Spacer direction="bottom" size="large" />
            </AccountContainer>
            <Spacer direction="top" size="large">
                <AuthButton
                    mode="contained"
                    onPress={() => navigation.goBack()}
                >
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackground>
    );
};
