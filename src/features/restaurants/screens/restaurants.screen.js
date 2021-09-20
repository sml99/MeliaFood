import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-Info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${StatusBar.currentHeight ?? 0}px;
`;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar />
        </SearchContainer>

        <RestaurantsList
            data={[
                { name: 1 },
                { name: 2 },
                { name: 3 },
                { name: 4 },
                { name: 5 },
                { name: 6 },
                { name: 7 },
                { name: 8 },
                { name: 9 },
                { name: 10 },
                { name: 11 },
                { name: 12 },
                { name: 13 },
                { name: 14 },
            ]}
            renderItem={() => (
                <Spacer direction="bottom" size="large">
                    <RestaurantInfoCard />
                </Spacer>
            )}
            keyExtractor={(item) => item.name.toString()}
        />
    </SafeArea>
);
