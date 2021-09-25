import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
    AuthInput,
} from "../components/account.styles";

export const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin } = useContext(AuthenticationContext);

    const login = () => {
        if (email.length > 4 && password.length >= 6) {
            onLogin(email, password);
        }
    };

    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthInput
                    keyboardType="email-address"
                    placeholder="Email"
                    autoCompleteType="email"
                    returnKeyType="next"
                    onChangeText={(text) => setEmail(text)}
                    onSubmitEditing={() => {
                        this.secondTextInput.focus();
                    }}
                    blurOnSubmit={false}
                />
                <Spacer direction="bottom" size="large" />
                <AuthInput
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    autoCompleteType="off"
                    secureTextEntry={true}
                    returnKeyType="done"
                    ref={(input) => {
                        this.secondTextInput = input;
                    }}
                />
                <Spacer direction="bottom" size="large" />
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={login}
                >
                    Login
                </AuthButton>
                <Spacer direction="bottom" size="large" />
            </AccountContainer>
        </AccountBackground>
    );
};
