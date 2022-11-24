import styled from "styled-components/native";

export const PostContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100px;
  padding: 5px 5px;
  margin-top: 3px;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const AvatarContainer = styled.View`
  flex: 0.15;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PostContent = styled.View`
  flex: 0.9;
  flex-direction: column;
`;
export const IconContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Input = styled.TextInput`
  height: 50px;
  margin-right: 10px;
  padding: 0 10px;
  border: 1px solid #dedede;
  border-radius: 20px;
`;

export const IconMenu = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 42px;
`;
