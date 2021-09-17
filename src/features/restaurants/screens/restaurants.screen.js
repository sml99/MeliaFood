import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-Info-card.component";

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${StatusBar.currentHeight ?? 0}px;
`;

const SearchContainer = styled.View`
    padding: 16px;
`;

const RestaurantListContainer = styled.View`
    flex: 1;
    padding: 16px;
`;

export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar />
        </SearchContainer>
        <RestaurantListContainer>
            <RestaurantInfoCard />
        </RestaurantListContainer>
    </SafeArea>
);
