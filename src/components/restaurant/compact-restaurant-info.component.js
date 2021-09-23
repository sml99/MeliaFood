import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import styled from "styled-components";
import WebView from "react-native-webview";
import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

const CompactWebView = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }) => {
    const Image = isAndroid ? CompactWebView : CompactImage;
    return (
        <TouchableOpacity>
            <Item>
                <Image source={{ uri: restaurant.photos[0] }} />
                <Text variant="caption" numberOfLines={3}>
                    {restaurant.name}
                </Text>
            </Item>
        </TouchableOpacity>
    );
};
