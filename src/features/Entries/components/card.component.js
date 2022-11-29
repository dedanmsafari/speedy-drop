import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  CardContainer,
  CompanyName,
  Industry,
  Description,
  BottomDetails,
} from "../screens/entries.styles";
const Card = ({ data }) => {
  const time = data.createdAt.toDate();

  return (
    <CardContainer>
      <CompanyName>
        <Text variant="title">{data.Name}</Text>
      </CompanyName>
      <Spacer position="bottom" size="medium" />
      <Industry>
        <Text variant="error">{data.Industry}</Text>
      </Industry>
      <Spacer position="bottom" size="medium" />
      <Description>
        <Text variant="hint">{data.Description}</Text>
      </Description>
      <Spacer position="bottom" size="medium" />
      <BottomDetails>
        <Text variant="caption">{data.Location}</Text>
        <Text variant="caption">{time.toLocaleTimeString()}</Text>
      </BottomDetails>
    </CardContainer>
  );
};

export default Card;
