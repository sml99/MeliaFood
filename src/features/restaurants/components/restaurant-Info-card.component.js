import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[2]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Rating = styled.View`
    flex-direction: row;
    padding: ${(props) => props.theme.space[2]} 0
        ${(props) => props.theme.space[1]};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body};
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
        rating = 4.2,
        isClosedTemporarily,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));
    console.log(ratingArray);
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};
