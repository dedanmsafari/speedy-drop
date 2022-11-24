import React from "react";
import { Image } from "react-native";
import {
  TopBarContainer,
  LogoButtonHome,
  IconContainer,
  IconButton,
} from "./topbar.styles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../infrastructure/theme/colors";

const TopBar = () => {
  return (
    <TopBarContainer>
      <LogoButtonHome activeOpacity={0.5}>
        <Image
          style={{ height: 35, width: 130 }}
          source={require("../../../../../assets/brandName.png")}
        />
        <Ionicons name="chevron-down-outline" size={20} color="black" />
      </LogoButtonHome>
      <IconContainer>
        <IconButton>
          <Ionicons name="search" size={20} color={colors.brand.primary} />
        </IconButton>
        <IconButton>
          <Ionicons
            name="notifications-outline"
            size={20}
            color={colors.brand.primary}
          />
        </IconButton>
        <IconButton>
          <Ionicons
            name="ios-chatbubble-ellipses-outline"
            size={20}
            color={colors.brand.primary}
          />
        </IconButton>
      </IconContainer>
    </TopBarContainer>
  );
};

export default TopBar;
