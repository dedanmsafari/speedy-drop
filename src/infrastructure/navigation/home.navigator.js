import React from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import HomeScreen from "../../features/Home/screens/home.screens";
import { StyledSafeAreaView } from "../../utils/safeArea.util.component";
import { colors } from "../theme/colors";
import styled from "styled-components/native";
const Stack = createStackNavigator();

// const HomeSafeAreaView = styled(StyledSafeAreaView)`
//   margin-left: ${({ theme }) => theme.space[3]};
//   margin-right: ${({ theme }) => theme.space[2]};
//   background-color: ${({ theme }) => theme.colors.brand.primary};
// `;

const HomeNavigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StyledSafeAreaView>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </StyledSafeAreaView>
    </View>
  );
};

export default HomeNavigator;
