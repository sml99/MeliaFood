import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { Platform } from "react-native";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    position: absolute;
    z-index: 99;
    top: ${Platform.OS === "android" ? 20 : 40}px;
    width: 100%;
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for a location"
                icon="map"
                value={searchKeyword}
                onSubmitEditing={() => search(searchKeyword)}
                onChangeText={(text) => setSearchKeyword(text)}
            />
        </SearchContainer>
    );
};
