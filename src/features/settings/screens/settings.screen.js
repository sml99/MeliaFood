import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.space[4]};
`;

export const SettingsScreen = ({ navigation }) => {
    const { user, onLogout } = useContext(AuthenticationContext);

    return (
        <SafeArea>
            <AvatarContainer>
                <Avatar.Icon
                    size={180}
                    icon="human"
                    backgroundColor="#2182BD"
                />
                <Spacer direction="top" size="large">
                    <Text center variant="label">
                        {user.email}
                    </Text>
                </Spacer>
            </AvatarContainer>

            <List.Section>
                <SettingsItem
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => (
                        <List.Icon {...props} color="black" icon="heart" />
                    )}
                    onPress={() => navigation.navigate("Favourites")}
                />
                <SettingsItem
                    title="logout"
                    left={(props) => (
                        <List.Icon {...props} color="black" icon="door" />
                    )}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    );
};
