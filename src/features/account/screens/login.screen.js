import React, { useContext, useState } from "react";
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
    LoadingIndicator,
} from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, isLoading, loginError } = useContext(
        AuthenticationContext
    );

    return (
        <AccountBackground>
            <AccountCover color="tomato" size="small" />
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

                {isLoading ? (
                    <LoadingIndicator size="large" />
                ) : (
                    <>
                        <Spacer direction="bottom" size="large">
                            <Text variant="error">
                                {loginError ? "Invalid email or password" : ""}
                            </Text>
                        </Spacer>

                        <AuthButton
                            color
                            icon="lock-open-outline"
                            mode="contained"
                            onPress={() => {
                                onLogin(email, password);
                            }}
                        >
                            Login
                        </AuthButton>
                    </>
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
