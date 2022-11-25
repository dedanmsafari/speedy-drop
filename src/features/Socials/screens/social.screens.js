import React from "react";
import { View } from "react-native";
import { Text } from "../../../components/text/text.component";
import { colors } from "../../../infrastructure/theme/colors";

const SocialScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg.primary }}>
      <Text>This is the socials screen</Text>
    </View>
  );
};

export default SocialScreen;
