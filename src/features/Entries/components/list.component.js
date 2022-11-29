import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Text } from "../../../components/text/text.component";

const ListComponent = ({ data }) => {
  const time = data.createdAt.toDate();
  return (
    <View>
      <Card elevation={4}>
        <Card.Content>
          <Title>{data.Name}</Title>
          <Paragraph>{data.Description}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>{time.toLocaleTimeString()}</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListComponent;
