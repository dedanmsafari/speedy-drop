import React from "react";
import {
  PostContainer,
  AvatarContainer,
  IconContent,
  PostContent,
  Input,
  IconMenu,
} from "./post.styles";
import { Avatar } from "react-native-paper";
import { Text } from "../../../../components/text/text.component";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Spacer } from "../../../../components/spacer/spacer.component";

const Post = () => {
  return (
    <PostContainer>
      <AvatarContainer>
        <Avatar.Image
          size={40}
          source={require("../../../../../assets/postPicture.png")}
        />
      </AvatarContainer>
      <PostContent>
        <Input placeholder="Share with locals..." multiline />

        <IconContent>
          <IconMenu>
            <Ionicons name="ios-videocam" size={24} color="#f44337" />
            <Spacer position="right" size="xsmall" />
            <Text variant="caption">Live</Text>
          </IconMenu>

          <IconMenu>
            <FontAwesome name="photo" size={20} color="#4caf50" />
            <Spacer position="right" size="xsmall" />
            <Text variant="caption">Photo</Text>
          </IconMenu>
          <IconMenu>
            <MaterialIcons name="video-collection" size={24} color="#1d4e89" />
            <Spacer position="right" size="xsmall" />
            <Text variant="caption">Video</Text>
          </IconMenu>
        </IconContent>
      </PostContent>
    </PostContainer>
  );
};

export default Post;
