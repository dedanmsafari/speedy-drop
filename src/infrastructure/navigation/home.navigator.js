import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import HomeDetailsScreens from "../../features/Home/screens/homeDetails.screens";
import HomeScreen from "../../features/Home/screens/home.screens";
import { SafeAreaView } from "../../utils/safeArea.util.component";
import styled from "styled-components/native";
const Stack = createStackNavigator();

const HomeSafeAreaView = styled(SafeAreaView)`
  margin-left: ${({ theme }) => theme.space[3]};
  margin-right: ${({ theme }) => theme.space[2]};
`;

const HomeNavigator = () => {
  return (
    <HomeSafeAreaView>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={HomeDetailsScreens} />
      </Stack.Navigator>
    </HomeSafeAreaView>
  );
};

export default HomeNavigator;
