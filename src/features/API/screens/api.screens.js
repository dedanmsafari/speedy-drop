import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { StyledSafeAreaView } from "../../../utils/safeArea.util.component";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";
import { HomeContainer, HeaderContainer } from "../screens/api.styles";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

const ApiScreen = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      setPosts(posts);
    }
    fetchPosts();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg.primary }}>
      <StyledSafeAreaView>
        <HomeContainer>
          <HeaderContainer>
            <Text variant="label"> JSONPLACEHOLDER-API</Text>
            <Spacer position="bottom" size="small" />
            <Text variant="caption">
              Using the json-placeholder endpoint we are going to get the posts
              and display them
            </Text>
          </HeaderContainer>
          <Spacer position="bottom" size="small" />
          <ScrollView>
            {posts.map(({ title, body, id }) => (
              <React.Fragment key={id}>
                <Card mode="outlined">
                  <Card.Content>
                    <Title>{title}</Title>
                    <Paragraph>{body}</Paragraph>
                  </Card.Content>
                  <Card.Cover
                    source={{ uri: "https://picsum.photos/200/300" }}
                  />
                  <Card.Actions>
                    <Button>{id}</Button>
                  </Card.Actions>
                </Card>
                <Spacer position="bottom" size="large" />
              </React.Fragment>
            ))}
          </ScrollView>
        </HomeContainer>
      </StyledSafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ApiScreen;
