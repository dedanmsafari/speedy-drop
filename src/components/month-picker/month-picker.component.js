import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Text } from "../text/text.component";
import styled from "styled-components/native";

const MonthDropDown = styled(Dropdown)`
  background-color: ${({ theme }) => theme.colors.ui.disabled};
  height: 50px;
  border-radius: 10px;
  width: 100px;
  padding: 10px;
`;

const data = [
  { label: "January", value: "1" },
  { label: "February", value: "2" },
  { label: "March", value: "3" },
  { label: "April", value: "4" },
  { label: "May", value: "5" },
  { label: "June", value: "6" },
  { label: "July", value: "7" },
  { label: "August", value: "8" },
  { label: "September", value: "9" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];

export const MonthPicker = () => {
  const [month, setMonth] = useState("1");

  const renderItem = (item) => {
    return (
      <View>
        <Text>{item.label}</Text>
      </View>
    );
  };

  return (
    <MonthDropDown
      data={data}
      value={month}
      labelField="label"
      valueField="value"
      maxHeight={150}
      onChange={(item) => setMonth(item.value)}
      renderItem={renderItem}
    />
  );
};
