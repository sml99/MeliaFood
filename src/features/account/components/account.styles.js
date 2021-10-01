import styled from "styled-components";
import { Button, TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
    source: {
        uri: "https://images.unsplash.com/photo-1600628421055-4d30de868b8f",
    },
})`
    flex: 1;
    background-color: #ddd;
    align-items: center;
    justify-content: center;
`;

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.15);
`;

export const AccountContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.67);
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[2]};
    align-items: center;
    width: 330px;
    border-radius: 20px;
`;

export const AuthButton = styled(Button).attrs({
    color: "#0c161e",
})`
    padding: ${(props) => props.theme.space[2]};
    width: 250px;
    margin: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput).attrs({
    selectionColor: "tomato",
})`
    width: 250px;
    height: 60px;
    padding: 0 10px;
    background-color: #eee;
`;

export const Title = styled(Text)`
    font-size: 30px;
`;
export const ErrorContainer = styled.View`
    max-width: 300px;
    align-items: center;
    align-self: center;
    margin-top: ${(props) => props.theme.space[2]};
    margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
    width: 100%;
    height: 30%;
    position: absolute;
    top: 30px;
    padding: ${(props) => props.theme.space[3]};
`;

export const LogoContainer = styled.Image`
    width: 60%;
    height: 15%;
    position: absolute;
    top: 75px;
`;

export const BannerContainer = styled.Image`
    width: 100%;
    height: 50%;
    position: absolute;
    top: -10px;
`;
