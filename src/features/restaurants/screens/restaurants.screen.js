import React, { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-Info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const RestaurantsList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const Loading = styled(ActivityIndicator)``;

const LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const RestaurantsScreen = () => {
    const { restaurants, isLoading } = useContext(RestaurantContext);

    return (
        <SafeArea>
            <Search />
            {isLoading ? (
                <LoadingContainer>
                    <Loading size="large" color="tomato" />
                </LoadingContainer>
            ) : (
                <RestaurantsList
                    data={restaurants}
                    renderItem={({ item }) => {
                        return (
                            <Spacer direction="bottom" size="large">
                                <RestaurantInfoCard restaurant={item} />
                            </Spacer>
                        );
                    }}
                    keyExtractor={(item) => item.name.toString()}
                />
            )}
        </SafeArea>
    );
};
