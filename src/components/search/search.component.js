import React, { useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
const SearchView = styled.View`
  padding-top: ${({ theme }) => theme.space[1]};
  padding-right: ${({ theme }) => theme.space[3]};
`;

export const Search = ({ placeholder }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SearchView>
      <Searchbar
        icon="magnify"
        placeholder={placeholder}
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
    </SearchView>
  );
};
