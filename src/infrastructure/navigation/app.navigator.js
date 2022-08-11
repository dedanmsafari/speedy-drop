import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../../features/Home/screens/home.screens";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View, Text } from "react-native";
import { colors } from "../theme/colors";
import { Feather } from "@expo/vector-icons";
import HomeNavigator from "./home.navigator";

const Tab = createMaterialBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Records: "book",
  Files: "file-text",
  Profile: "user",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ color, size = 20 }) => (
      <Feather name={iconName} size={size} color={color} />
    ),
  };
};

const FileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>File Screen</Text>
    </View>
  );
};
const RecordsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Records Screen</Text>
    </View>
  );
};
const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        shifting={true}
        barStyle={{
          backgroundColor: colors.brand.primary,
          position: "absolute",
          overflow: "hidden",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Records" component={RecordsScreen} />
        <Tab.Screen name="Files" component={FileScreen} />
        <Tab.Screen name="Profile" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
