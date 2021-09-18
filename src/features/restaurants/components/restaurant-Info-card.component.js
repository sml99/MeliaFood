import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[2]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body}
    padding: ${(props) => props.theme.space[2]};
    color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Eleven",
        icon,
        photos = [
            "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    );
};
