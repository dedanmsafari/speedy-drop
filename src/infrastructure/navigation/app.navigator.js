import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View, Text } from "react-native";
import { colors } from "../theme/colors";
import { Ionicons } from "@expo/vector-icons";

import HomeNavigator from "./home.navigator";

const Tab = createMaterialBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  People: "md-people",
  Profile: "person-sharp",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ color, size = 24 }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
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
    <Tab.Navigator
      screenOptions={createScreenOptions}
      labeled={false}
      activeColor={colors.brand.primary}
      inactiveColor={colors.brand.muted}
      barStyle={{
        position: "absolute",
        backgroundColor: colors.bg.primary,
        borderTopWidth: 1,
        borderTopColor: colors.ui.tertiary,
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="People" component={RecordsScreen} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
