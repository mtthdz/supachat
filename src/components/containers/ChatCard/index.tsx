import { Text, TouchableOpacity, View } from "react-native"
import SChatCard from "./ChatCard.styles";

const ChatCard = () => {
  return (
    <TouchableOpacity style={SChatCard.container}>
      <View style={SChatCard.avatar}></View>
      <View style={SChatCard.content}>
        <Text style={SChatCard.title}>name</Text>
        <Text style={SChatCard.meta}>lorem ipsum dolor si...</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ChatCard;