import { FlatList, View } from "react-native";

import React from "react";

import { FadeInView } from "../../../animations/fade.animation";

import Post from "../components/post/post.component";

import { colors } from "../../../infrastructure/theme/colors";
import Interests from "../components/interests/interests.component";
import TopBar from "../components/TopBar/topbar.component";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.brand.secondary }}>
      <TopBar />
      <Post />
      <Interests />
    </View>
  );
}
