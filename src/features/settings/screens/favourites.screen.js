import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-Info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

const RestaurantsList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const NoFavouritesArea = styled(SafeArea)`
    align-items: center;
    justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
    const { favourites } = useContext(FavouritesContext);

    return favourites.length ? (
        <RestaurantsList
            data={favourites}
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
    ) : (
        <NoFavouritesArea>
            <Text center>No favourites yet</Text>
        </NoFavouritesArea>
    );
};
