import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
    const { favourites, addToFavourites, removeFromFavourites } =
        useContext(FavouritesContext);

    const isFavourite = favourites.find(
        (r) => r.placeId === restaurant.placeId
    );

    return (
        <FavouriteButton
            onPress={() => {
                !isFavourite
                    ? addToFavourites(restaurant)
                    : removeFromFavourites(restaurant);
            }}
        >
            <AntDesign
                name={isFavourite ? "heart" : "hearto"}
                size={24}
                color={isFavourite ? "tomato" : "white"}
            />
        </FavouriteButton>
    );
};
