import React from "react";
import { ScrollView } from "react-native";
import { Container } from "./interests.styles";

import InterestItem from "./interestItem";
const interests = [
  "All",
  "Chess",
  "Cooking",
  "Social",
  "Football",
  "Meet-ups",
  "Video-games",
];

const Interests = () => {
  const [mode, setMode] = React.useState("outlined");
  const onModePress = () => {
    if (mode != "contained") {
      setMode("contained");
    } else {
      setMode("outlined");
    }
  };

  return (
    <Container>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {interests.map((interest) => (
          <InterestItem interest={interest} key={interest} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Interests;
