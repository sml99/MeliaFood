import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
    padding: 16px;
`;

const RestaurantCard = styled(Card)`
    background-color: #fff;
`;

const RestaurantCardCover = styled(Card.Cover)`
    background-color: #fff;
    padding: 12px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "E1even",
        icon,
        photos = [
            "https://images.pexels.com/photos/6443989/pexels-photo-6443989.jpeg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4.3,
        isClosedTemporarily = false,
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    );
};
