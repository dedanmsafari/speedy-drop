import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View, Text } from "react-native";
import { colors } from "../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import SocialScreen from "../../features/Socials/screens/social.screens";
import HomeNavigator from "./home.navigator";

const Tab = createMaterialBottomTabNavigator();

const TAB_ICON = {
  Form: "md-document-text",
  Entries: "file-tray-stacked-sharp",
  API: "server",
  Messaging: "ios-mail",
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
      activeColor={colors.brand.primary}
      inactiveColor={colors.brand.muted}
      barStyle={{
        position: "relative",
        backgroundColor: colors.bg.primary,
        borderTopWidth: 1,
        borderTopColor: colors.ui.tertiary,
      }}
    >
      <Tab.Screen name="Form" component={HomeNavigator} />
      <Tab.Screen name="Entries" component={SocialScreen} />
      <Tab.Screen name="API" component={SettingsScreen} />
      <Tab.Screen name="Messaging" component={RecordsScreen} />
    </Tab.Navigator>
  );
}
