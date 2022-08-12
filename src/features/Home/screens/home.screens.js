import { FlatList, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import styled from "styled-components/native";
import React from "react";
import { Search } from "../../../components/search/search.component";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  SearchBarSection,
  SearchContainer,
  SearchIconSection,
  AdditionButton,
} from "../../../components/search/search.styles";
import MenuItemComponent from "../../../components/menu-item/menu-item.component";

import { FadeInView } from "../../../animations/fade.animation";

const ProjectItems = Array(20).fill();

const DataList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 5 },
})``;

export default function HomeScreen({ navigation }) {
  return (
    <>
      <Spacer />
      <Text variant="label">Projects</Text>
      <Spacer position="bottom" size="medium" />
      <SearchContainer>
        <SearchBarSection>
          <Search placeholder="projects" />
        </SearchBarSection>
        <SearchIconSection>
          <IconButton icon="tune" size={25} mode="contained" color="white" />
        </SearchIconSection>
      </SearchContainer>
      <DataList
        data={ProjectItems}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => navigation.navigate("DetailsScreen")}
            >
              <FadeInView>
                <Spacer position="bottom" size="medium">
                  <MenuItemComponent />
                </Spacer>
              </FadeInView>
            </TouchableOpacity>
          );
        }}
        key={(item) => item}
      />
      <AdditionButton>
        <IconButton icon="plus" size={25} color="white" />
      </AdditionButton>
    </>
  );
}
