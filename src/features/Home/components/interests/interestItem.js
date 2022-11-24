import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../../../infrastructure/theme/colors";

const InterestItem = ({ interest }) => {
  const [mode, setMode] = React.useState("outlined");

  const onModePress = () => {
    if (mode != "contained") {
      setMode("contained");
    } else {
      setMode("outlined");
    }
  };
  return (
    <>
      <Button
        mode={mode}
        key={interest}
        uppercase={false}
        onPress={onModePress}
        color={colors.brand.primary}
        style={{
          borderRadius: 15,
          marginLeft: 10,
        }}
      >
        {" "}
        {interest}
      </Button>
    </>
  );
};

export default InterestItem;
