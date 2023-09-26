import { Text, TouchableOpacity, View } from "react-native"
import SChatCard from "./ChatCard.styles";
import Layout from "../../sections/Layout";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

/**
 * TODO: make avatar standalone component with variants
 * TODO: send props to cousin via chat reducer
 * 
 * @returns JSX
 */
type props = {
  name: string,
  message: string,
}
const ChatCard = ({ name, message }: props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity style={SChatCard.button} onPress={() => navigation.navigate('ChatMain')}>
      <Layout>
        <View style={SChatCard.container}>
          <View style={SChatCard.avatar}></View>
          <View style={SChatCard.content}>
            <Text style={SChatCard.title}>{name ? name : 'user'}</Text>
            <Text style={SChatCard.meta}>{message ? message : 'send a message'}</Text>
          </View>
        </View>
      </Layout>
    </TouchableOpacity>
  )
}

export default ChatCard;