import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-Info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourite/favourites-bar.component";
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

export const RestaurantsScreen = ({ navigation }) => {
    const [isToggled, setIsToggled] = useState(false);
    const { restaurants, isLoading } = useContext(RestaurantsContext);
    const { favourites } = useContext(FavouritesContext);

    return (
        <SafeArea>
            <Search
                isFavouriteToggled={isToggled}
                onFavouriteToggle={() => setIsToggled(!isToggled)}
            />
            {isToggled && (
                <FavouritesBar
                    favourites={favourites}
                    onNavigate={navigation.navigate}
                />
            )}
            {isLoading ? (
                <LoadingContainer>
                    <Loading size="large" color="tomato" />
                </LoadingContainer>
            ) : (
                <RestaurantsList
                    data={restaurants}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("RestaurantDetail", {
                                        restaurant: item,
                                    })
                                }
                            >
                                <Spacer direction="bottom" size="large">
                                    <RestaurantInfoCard restaurant={item} />
                                </Spacer>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item) => item.name.toString()}
                />
            )}
        </SafeArea>
    );
};
