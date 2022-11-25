import { View, ScrollView } from "react-native";

import React from "react";

import { FadeInView } from "../../../animations/fade.animation";
import FeedData from "../components/feed/data";
import Post from "../components/post/post.component";

import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/spacer/spacer.component";
import Interests from "../components/interests/interests.component";
import TopBar from "../components/TopBar/topbar.component";
import Feed from "../components/feed/feed.component";

// const FeedList = styled(FlatList).attrs({
//   contentContainerStyle: { padding: 0 },
// })``;

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.brand.secondary }}>
      <TopBar />
      <ScrollView>
        <Post />
        <Interests />
        {FeedData.map((feedData) => (
          <FadeInView key={feedData.userName}>
            <Spacer position="bottom" size="xsmall">
              <Feed feed={feedData} />
            </Spacer>
          </FadeInView>
        ))}

        {/* <FeedList
        data={FeedData}
        renderItem={({ item }) => {
          return (
            <FadeInView>
              <Spacer position="bottom" size="xsmall">
                <Feed feed={item} />
              </Spacer>
            </FadeInView>
          );
        }}
        keyExtractor={(item) => item.name}
      /> */}
      </ScrollView>
    </View>
  );
}
