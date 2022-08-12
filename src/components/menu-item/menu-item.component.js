import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../text/text.component";
import { IconButton } from "react-native-paper";
import {
  MenuView,
  ImageIcon,
  CompleteSection,
  IconSection,
  TextSection,
  CompleteIconSection,
  CompletePercentageSection,
} from "./menu-item.styles";

const MenuItemComponent = () => {
  return (
    <>
      <MenuView>
        <IconSection>
          <ImageIcon source={require("../../images/brownBiscuit.jpg")} />
        </IconSection>
        <TextSection>
          <Text variant="title">Kontrare.Miposkapet</Text>
          <Text variant="hint">Daren. Dekad. Tajer. Varat</Text>
          <Text variant="hint">Sasam. Nibas.</Text>
          <Text variant="caption">02-2-22-02-8-22</Text>
        </TextSection>
        <CompleteSection>
          <CompleteIconSection>
            <IconButton
              icon="dots-vertical"
              size={20}
              mode="contained"
              color="#757575"
            />
          </CompleteIconSection>
          <CompletePercentageSection>
            <Text variant="success">80%</Text>
            <Text variant="hint">COMPLETE</Text>
          </CompletePercentageSection>
        </CompleteSection>
      </MenuView>
    </>
  );
};

export default MenuItemComponent;
