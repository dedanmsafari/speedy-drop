import React from "react";
import { View, StyleSheet } from "react-native";
import {
  ReportsContainer,
  ReportsIconSection,
  ReportsDetailsSection,
  ProgressBar,
} from "../../features/Home/screens/screens.styles";
import { Feather } from "@expo/vector-icons";
import { Text } from "../text/text.component";
import { Spacer } from "../spacer/spacer.component";

export const Reports = ({ icon, width }) => {
  return (
    <ReportsContainer>
      <ReportsIconSection>
        <Feather name={icon} size={24} color="black" />
      </ReportsIconSection>
      <ReportsDetailsSection>
        <Text>Report 01</Text>
        <Text variant="hint">Lorem ipsum</Text>
        <ProgressBar width={width} />
      </ReportsDetailsSection>
    </ReportsContainer>
  );
};
