import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  ActivityIndicator,
} from "react-native";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/text/text.component";
import { colors } from "../../../infrastructure/theme/colors";
import { StyledSafeAreaView } from "../../../utils/safeArea.util.component";
import { FadeInView } from "../../../animations/fade.animation";
import {
  HomeContainer,
  SortContainer,
  ListSort,
  CardSort,
} from "./entries.styles";
import Card from "../components/card.component";
import ListComponent from "../components/list.component";
import { getCompanies } from "../../../utils/firebase/firebase.utils";
import { Ionicons } from "@expo/vector-icons";

const EntriesScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = useState([]);
  const [mode, setMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    setIsLoading(true);
    const companyData = await getCompanies();
    setData(companyData);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData();
    setRefreshing(false);
  }, [data]);

  const FeedList = styled(FlatList).attrs({
    contentContainerStyle: { padding: 0 },
  })``;

  const renderLoader = () => {
    return isLoading ? (
      <View style={{ marginVertical: 16, alignItems: "center" }}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg.primary }}>
      <StyledSafeAreaView>
        <HomeContainer>
          <Text variant="label">List of all Company Entries</Text>
          <Spacer position="bottom" size="small" />
          <SortContainer>
            <ListSort onPress={() => setMode(false)}>
              <Ionicons name="list-circle" size={24} color="green" />
              <Text>List</Text>
            </ListSort>
            <CardSort onPress={() => setMode(true)}>
              <Ionicons name="apps" size={24} color="green" />
              <Text>Card</Text>
            </CardSort>
          </SortContainer>
          <Spacer position="bottom" size="medium" />
          <FeedList
            ListFooterComponent={renderLoader}
            onEndReached={getData}
            onEndReachedThreshold={0}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={data}
            renderItem={({ item }) => {
              return (
                <FadeInView>
                  <Spacer position="bottom" size="medium">
                    {mode ? (
                      <Card data={item} />
                    ) : (
                      <ListComponent data={item} />
                    )}
                  </Spacer>
                </FadeInView>
              );
            }}
            keyExtractor={(item) => item.Name}
          />
        </HomeContainer>
      </StyledSafeAreaView>
    </View>
  );
};

export default EntriesScreen;
