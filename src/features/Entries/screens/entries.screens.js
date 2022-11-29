import React, { useEffect, useState } from "react";
import { View, ScrollView, RefreshControl } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/text/text.component";
import { colors } from "../../../infrastructure/theme/colors";
import { StyledSafeAreaView } from "../../../utils/safeArea.util.component";
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

  useEffect(() => {
    async function getData() {
      const companyData = await getCompanies();
      setData(companyData);
    }

    getData();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    async function getData() {
      const companyData = await getCompanies();
      setData(companyData);
    }
    getData();
    setRefreshing(false);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg.primary }}>
      <StyledSafeAreaView>
        <HomeContainer>
          <Text variant="label">List of all Company Entries</Text>
          <Spacer position="bottom" size="small" />

          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
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
            {data.map((companyDetails) => (
              <React.Fragment key={companyDetails.Name}>
                {mode ? (
                  <Card data={companyDetails} />
                ) : (
                  <ListComponent data={companyDetails} />
                )}

                <Spacer position="bottom" size="medium" />
              </React.Fragment>
            ))}
          </ScrollView>
        </HomeContainer>
      </StyledSafeAreaView>
    </View>
  );
};

export default EntriesScreen;
