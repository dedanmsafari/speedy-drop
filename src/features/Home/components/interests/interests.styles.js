import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  margin: 3px 0px;

  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
