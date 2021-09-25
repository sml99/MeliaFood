import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
} from "../components/account.styles";

export const RegisterScreen = () => {
    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => console.log("Register Pressed")}
                >
                    Register
                </AuthButton>
                <Spacer direction="bottom" size="large" />
            </AccountContainer>
        </AccountBackground>
    );
};
