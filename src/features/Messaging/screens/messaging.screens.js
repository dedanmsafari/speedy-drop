import React, { useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";
import { StyledSafeAreaView } from "../../../utils/safeArea.util.component";
import { Text } from "../../../components/text/text.component";
import { HomeContainer } from "./messaging.styles";

import messaging from "@react-native-firebase/messaging";

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
  }
}

useEffect(() => {
  if (requestUserPermission()) {
    //return fcm token for the device

    messaging()
      .getToken()
      .then((token) => {
        console.log(token);
      });
  } else {
    console.log("Failed token status", authStatus);
  }

  messaging()
    .getInitialNotification()
    .then(async (remoteMessage) => {
      if (remoteMessage) {
        console.log(
          "Notification caused app to open from quit state:",
          remoteMessage.notification
        );
      }
    });

  messaging().onNotificationOpenedApp(async (remoteMessage) => {
    console.log(
      "Notification caused app to open from background state:",
      remoteMessage.notification
    );
  });

  // Register background handler
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log("Message handled in the background!", remoteMessage);
  });

  const unsubscribe = messaging().onMessage(async (remoteMessage) => {
    Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
  });

  return unsubscribe;
}, []);

const MessagingScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg.primary }}>
      <StyledSafeAreaView>
        <HomeContainer>
          <Text variant="label">Firebase Cloud Messaging</Text>
        </HomeContainer>
      </StyledSafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MessagingScreen;
