import { FlatList, TouchableOpacity, Image, View } from "react-native";
import { IconButton } from "react-native-paper";
import styled from "styled-components/native";
import React from "react";
import { Search } from "../../../components/search/search.component";
import { Text } from "../../../components/text/text.component";

import { Ionicons } from "@expo/vector-icons";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AdditionButton } from "../../../components/search/search.styles";
import MenuItemComponent from "../../../components/menu-item/menu-item.component";
import { FlatFeed } from "expo-activity-feed";
import { FadeInView } from "../../../animations/fade.animation";
import {
  TopBarContainer,
  LogoButtonHome,
  IconContainer,
  HomePage,
} from "./screens.styles";
import { colors } from "../../../infrastructure/theme/colors";

const ProjectItems = Array(20).fill();

const DataList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 1 },
})``;

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.brand.secondary }}>
      <TopBarContainer>
        <LogoButtonHome activeOpacity={0.5}>
          <Image
            style={{ height: 35, width: 130 }}
            source={require("../../../../assets/brandName.png")}
          />
          <Ionicons name="chevron-down-outline" size={20} color="black" />
        </LogoButtonHome>
        <IconContainer>
          <IconButton icon="magnify" size={20} color={colors.brand.primary} />
          <IconButton
            icon="bell-outline"
            size={20}
            color={colors.brand.primary}
          />
          <IconButton
            icon="message-reply-outline"
            size={20}
            color={colors.brand.primary}
          />
        </IconContainer>
      </TopBarContainer>
      <DataList
        data={ProjectItems}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity activeOpacity={0.4}>
              <FadeInView>
                <Spacer position="bottom" size="xsmall">
                  {/* <MenuItemComponent /> */}
                  <FlatFeed />
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
    </View>
  );
}
