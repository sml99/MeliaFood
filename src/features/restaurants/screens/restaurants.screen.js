import React from "react";
import { StatusBar, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-Info-card.component";

const isAndroid = Platform.OS === "android";

const SafeArea = styled.SafeAreaView`
    flex: 1;
    margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

const SearchContainer = styled.View`
    padding: 16px;
`;

const RestaurantListContainer = styled.View`
    flex: 1;
    padding: 16px;
    background-color: #eee;
`;

export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfoCard />
            </RestaurantListContainer>
        </SafeArea>
    );
};
