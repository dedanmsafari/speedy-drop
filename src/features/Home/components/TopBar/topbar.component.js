import React from "react";
import { Image } from "react-native";
import {
  TopBarContainer,
  LogoButtonHome,
  IconContainer,
} from "./topbar.styles";
import { IconButton } from "react-native-paper";
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
  );
};

export default TopBar;
