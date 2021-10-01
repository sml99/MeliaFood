import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
    BannerContainer,
} from "../components/account.styles";

/* <AnimationWrapper>
    <LottieView
        key="animation"
        loop
        autoPlay
        resizeMode="cover"
        source={require("../../../../assets/delivery.json")}
    />
</AnimationWrapper>; */

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <BannerContainer
                source={require("../../../../assets/meliafood-light.png")}
                resizeMode="cover"
            />
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                >
                    Login
                </AuthButton>
                <Spacer direction="bottom" size="large" />
                <AuthButton
                    icon="email"
                    mode="contained"
                    onPress={() => navigation.navigate("Register")}
                >
                    Register
                </AuthButton>
            </AccountContainer>
        </AccountBackground>
    );
};
