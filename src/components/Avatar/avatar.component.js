import React from "react";
import { View } from "react-native";
import { Avatar } from "react-native-paper";
import { UserActive } from "./avatar.styles";

const AvatarIcon = ({ source, online }) => {
  return (
    <View>
      <Avatar.Image size={45} source={source} />
      {online && <UserActive />}
    </View>
  );
};

export default AvatarIcon;
