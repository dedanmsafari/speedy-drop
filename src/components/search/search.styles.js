import styled from "styled-components/native";

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
  padding-bottom: 20px;
`;

export const SearchBarSection = styled.View`
  min-width: 85%;
`;

export const SearchIconSection = styled.View`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.brand.primary};
`;
export const AdditionButton = styled.View`
  background-color: ${({ theme }) => theme.colors.brand.primary};
  position: absolute;
  right: 20px;
  border-radius: 50px;
  bottom: 80px;
  z-index: 9;
`;
