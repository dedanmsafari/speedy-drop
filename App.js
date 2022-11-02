import "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as usePoppins,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import {
  useFonts as useOleoScriptSwashCaps,
  OleoScriptSwashCaps_400Regular,
  OleoScriptSwashCaps_700Bold,
} from "@expo-google-fonts/oleo-script-swash-caps";
import { StreamApp } from "expo-activity-feed";
import AppLoading from "expo-app-loading";

import AppNavigator from "./src/infrastructure/navigation/app.navigator";

export default function App() {
  let [PoppinsLoaded] = usePoppins({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  let [OleoScriptSwashCapsLoaded] = useOleoScriptSwashCaps({
    OleoScriptSwashCaps_400Regular,
    OleoScriptSwashCaps_700Bold,
  });

  if (!PoppinsLoaded || !OleoScriptSwashCapsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <StreamApp
          apiKey="k935mrhwrkfh"
          appId="1152928"
          token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibmFtZWxlc3Mtc2t5LTkifQ.rbPi52y0fL4TN2oyYq5kR_YCbxJQEYRbfzXojflfoTA"
        >
          <AppNavigator />
        </StreamApp>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
