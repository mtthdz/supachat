import { View, Text } from "react-native"
import Avatar from "../../elements/Avatar"
import SChatTimestamp from "./ChatTimestamp.styles";

const ChatTimestamp = () => {
  return (
    <View style={SChatTimestamp.container}>
      <Avatar />
      <Text style={SChatTimestamp.text}>2m ago</Text>
    </View>
  );
};

export default ChatTimestamp;
