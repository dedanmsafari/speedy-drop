import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/text/text.component";
import { MonthPicker } from "../../../components/month-picker/month-picker.component";
import {
  TopBar,
  PickerContainer,
  TextContainer,
  BarChartContainer,
  DatesContainer,
  WeeksContainer,
  FocusedDot,
  ViewReportsButton,
} from "./screens.styles";
import { BarChartComponent } from "../../../components/bar-chart/bar-chart.component";
import { Reports } from "../../../components/reports/reports.component";
import { Feather } from "@expo/vector-icons";

const HomeDetailsScreens = () => {
  const navigation = useNavigation();

  return (
    <>
      <Spacer />
      <TopBar>
        <TextContainer>
          <Text variant="label">Lorem Ipsum Reporting</Text>
        </TextContainer>
        <PickerContainer>
          <MonthPicker />
        </PickerContainer>
      </TopBar>
      <DatesContainer>
        <Text variant="title">Today </Text>
        <WeeksContainer>
          <Text variant="title"> Week </Text>
          <Spacer position="bottom" size="small" />
          <FocusedDot />
        </WeeksContainer>
        <Text variant="title">Month </Text>
      </DatesContainer>
      <BarChartContainer>
        <BarChartComponent />
      </BarChartContainer>
      <Reports icon="droplet" width={"270px"} />
      <Spacer />
      <Reports icon="box" width="230px" />

      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ViewReportsButton>
          <Text>View All Reports</Text>
          <Feather name="chevron-right" size={24} color="black" />
        </ViewReportsButton>
      </TouchableOpacity>
    </>
  );
};

export default HomeDetailsScreens;
