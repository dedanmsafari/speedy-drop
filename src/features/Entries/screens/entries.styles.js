import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${colors.bg.primary};
  padding: 20px 10px 0px 10px;
`;

export const SortContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ListSort = styled.TouchableOpacity`
  flex-direction: row;
`;
export const CardSort = styled.TouchableOpacity`
  flex-direction: row;
`;

export const CardContainer = styled.View`
  background-color: ${colors.bg.secondary};
  padding: 5px 8px;
  border-radius: 10px;
  elevation: 5;
`;
export const CompanyName = styled.View`
  align-items: center;
`;
export const Industry = styled.View``;
export const Description = styled.View`
  align-items: center;
`;

export const BottomDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
