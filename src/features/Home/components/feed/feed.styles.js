import styled from "styled-components";

export const FeedContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
export const UserInfo = styled.View`
  flex-direction: column;
  padding: 0px 8px;
`;

export const LocationMarker = styled.View`
  margin-left: auto;
`;

export const Body = styled.View``;
export const TextContainer = styled.View`
  padding: 5px 15px;
`;
export const Photo = styled.Image`
  width: 100%;
  height: 270px;
`;

export const Feedback = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.ui.tertiary};
`;
export const Like = styled.View`
  flex-direction: row;
  width: 50px;
  justify-content: space-between;
`;
