import styled from "styled-components";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
    source: {
        uri: "https://images.pexels.com/photos/7706416/pexels-photo-7706416.jpeg",
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
    background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[2]};
    align-items: center;
    width: 330px;
`;

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary,
})`
    padding: ${(props) => props.theme.space[2]};
    width: 250px;
`;

export const AuthInput = styled(TextInput).attrs({
    selectionColor: "tomato",
})`
    width: 250px;
    height: 50px;
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
