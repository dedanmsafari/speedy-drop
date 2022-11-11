import styled from "styled-components/native";

export const TopBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;

  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
export const IconContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 8px;
`;

export const LogoButtonHome = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
`;
