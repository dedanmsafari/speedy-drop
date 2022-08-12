import styled from "styled-components/native";

export const MenuView = styled.View`
  flex-direction: row;
  margin-right: 5px;
  border-radius: 5px;

  padding-left: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.ui.disabled};
`;

export const ImageIcon = styled.Image`
  height: 80px;
  width: 70px;
  border-radius: 10px;
`;

export const IconSection = styled.View`
  flex: 0.5;

  align-items: center;
  justify-content: center;
`;

export const TextSection = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 5px;
  align-items: flex-start;
`;
export const CompleteSection = styled.View`
  flex: 0.5;
  flex-direction: column;
`;

export const CompleteIconSection = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: -12px;
  margin-right: -3px;
`;

export const CompletePercentageSection = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
