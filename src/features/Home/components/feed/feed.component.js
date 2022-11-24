import React from "react";
import AvatarIcon from "../../../../components/Avatar/avatar.component";
import { Text } from "../../../../components/text/text.component";
import { Ionicons, MaterialIcons, Fontisto } from "@expo/vector-icons";
import {
  Body,
  FeedContainer,
  Header,
  LocationMarker,
  UserInfo,
  TextContainer,
  Photo,
  Feedback,
  Like,
} from "./feed.styles";
import { colors } from "../../../../infrastructure/theme/colors";

const Feed = ({
  feed: {
    online,
    profilePic,
    userName,
    time,
    IconName,
    IconText,
    text,
    postPic,
    comments,
  },
}) => {
  return (
    <FeedContainer>
      <Header>
        <AvatarIcon online={online} source={profilePic} />
        <UserInfo>
          <Text variant="caption">{userName}</Text>
          <Text variant="caption">{time}</Text>
        </UserInfo>
        <Ionicons name={IconName} size={24} color={colors.ui.icons} />
        <Text variant="caption">{IconText}</Text>
        <LocationMarker>
          <MaterialIcons
            name="more-vert"
            size={24}
            color={colors.ui.secondary}
          />
        </LocationMarker>
      </Header>
      <Body>
        <TextContainer>
          <Text>{text}</Text>
        </TextContainer>
        <Photo source={postPic} />
        <Feedback>
          <Like>
            <Fontisto name="like" size={20} color={colors.brand.primary} />
            <Text variant="caption">like</Text>
          </Like>
          <Text variant="caption">{comments}</Text>
        </Feedback>
      </Body>
    </FeedContainer>
  );
};

export default Feed;
