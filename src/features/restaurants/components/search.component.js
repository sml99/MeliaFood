import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ onFavouriteToggle, isFavouriteToggled }) => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchContainer>
            <Searchbar
                icon={isFavouriteToggled ? "heart" : "heart-outline"}
                onIconPress={onFavouriteToggle}
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => search(searchKeyword)}
                onChangeText={(text) => setSearchKeyword(text)}
            />
        </SearchContainer>
    );
};
