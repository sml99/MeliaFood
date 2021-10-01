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
    LogoContainer,
} from "../components/account.styles";

export const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, isLoading, error } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
            <LogoContainer
                source={require("../../../../assets/logo-light.png")}
                resizeMode="cover"
            />
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
                <AuthInput
                    label="Repeat Password"
                    value={repeatedPassword}
                    placeholder="Password"
                    onChangeText={(text) => setRepeatedPassword(text)}
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
                        icon="email"
                        mode="contained"
                        onPress={() =>
                            onRegister(email, password, repeatedPassword)
                        }
                    >
                        Regitser
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
